import React, { PureComponent } from "react";
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
import Tile from "./1_tile";
import sideAnimation from "./assets/side.png";
import Sprite from "./2_sprite";
import reportWebVitals from './reportWebVitals';
import Bienvenue from "./components/Bienvenue/Bienvenue";
import moi1 from './assets/sprite1.gif';
import moi2 from './assets/sprite2.gif';
import styles from './index.css';

const tile = { width: 20, height: 24 };
const Container = styled.div`
  height: 50px;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
function entrerApp() {
  alert('Ok allé go!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Container id="container">
       <div id="ecranPremier">
        <h1>Bienvenue</h1>
        <Sprite
          src={sideAnimation}
          tile={tile}
          states={4}
          scale={2.5}
          framesPerStep={8}
        />
        <Button onClick={entrerApp}>
          Entrer app
        </Button>
      </div>
    </Container>
);
