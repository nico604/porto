import React from 'react';
import styles from './Bienvenue.module.css';

function Bienvenue(props){

  return(
    <div className={styles.Bienvenue}>
      <h6 className={styles.h6}>Bienvenue {props.nom}, J'espere que tout est correct malgré ton {props.age}</h6>    
    </div> 
    );
}


export default Bienvenue;
