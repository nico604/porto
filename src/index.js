import React, { PureComponent } from "react";
import ReactDOM from 'react-dom/client';
import { GameEngine } from "react-game-engine";
import Matter from "matter-js";
import reportWebVitals from './reportWebVitals';

import  Box  from "./Box";
import { MoveBox } from "./systems"
import Bienvenue from "./components/Bienvenue/Bienvenue";
import moi1 from './assets/sprite1.gif';
import moi2 from './assets/sprite2.gif';

const width = 1200;

const height = 400; 


const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;  
  
const boxSize = Math.trunc(Math.max(width, height) * 0.075);
const floor = Matter.Bodies.rectangle(width / 2, height - boxSize / 2, width, boxSize, { isStatic: true });

const initialBox = Matter.Bodies.rectangle(width/3, height / 3, boxSize, boxSize);
Matter.World.add(world, [initialBox, floor]);

const Physics = (entities, { time }) => {
  let engine = entities["physics"].engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <GameEngine
      style={{ width: 1200, height: 600, backgroundColor: "#7FFFD4" }}
      systems={[Physics]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          physics: { engine: engine, world: world },
          floor: { body: floor, size: [width, boxSize], color: "blue", renderer: Box }, 
          initialBox: { body: initialBox, size: [boxSize, boxSize], color: 'red', renderer: Box}

        }}>
        <Bienvenue nom="Nathan" age={27} occupation="Dj" img={moi1}/>
         <Bienvenue nom="Tristan" age={32} occupation="Star" img={moi2} />
         
    </GameEngine>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
