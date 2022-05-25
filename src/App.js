import React from 'react';

//import EcranPremier from "./components/EcranPremier";
//import Header from "./components/header";
import Modal from "./components/ModalPop";
import { Link } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
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
