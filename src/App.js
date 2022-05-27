import React,{ useEffect } from 'react';

//import EcranPremier from "./components/EcranPremier";
//import Header from "./components/header";
import Modal from "./components/ModalPop";
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';


//import logo from './logo.svg';
import './App.css';

function App() {

useEffect(() => {
  WebFont.load({
    google: {
      families: ['Droid Sans', 'Chilanka']
    }
  });
 }, []);



  return (
    <div className="App">
    <div className="navContainer"
     style={{
      background:  'lightgrey'

     }}
    >
      <h1 className="font-loader">Nicolas Girard</h1>
      <nav className="font-loader"
        style={{

          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          fontSize: "2em",
          color: "orange"
        }}
      >
        <Link to="/EcranPremier">Personnage</Link> |{" "}
        <Link to="/apidiscogs">Collection Vynils</Link>
      </nav>
    </div>

      <Modal />
    </div>
  );
}

export default App;
