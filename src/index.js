import React, { PureComponent } from "react";

import ReactDOM from 'react-dom/client';

import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBox } from "./systems"


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 200,  y: 200, renderer: <Box />}
        }}>

      </GameEngine>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
