import React from 'react';
import styles from './Bienvenue.module.css';
import soldatier from '../../assets/soldatFrancais1.png';



function Bienvenue(props){

  return(
    <div className={styles.Bienvenue}>
     <img src={soldatier} width='150' />
      <h6 className={styles.h6}>Bienvenue {props.nom}, J'espere que tout est correct malgré la nouvelle de l'engagement   {props.age}</h6>    
    </div> 
    );
}


export default Bienvenue;
