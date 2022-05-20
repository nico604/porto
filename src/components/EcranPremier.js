import React from "react";
import Sprite from ".././2_sprite";
//import Tile from ".././1_tile";
import sideAnimation from ".././assets/side.png";
import { Button } from 'reactstrap';

const tile = { width: 20, height: 24 };

function EcranPremier(props){
return(
  
  <div>
    <h1>Bienvenue</h1>
    <Sprite
      src={sideAnimation}
      tile={tile}
      states={4}
      scale={2.5}
      framesPerStep={8}
    />
      <Button color="primary">primary</Button>{' '}
  </div>

  )
}
export default EcranPremier;
     
