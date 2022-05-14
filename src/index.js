import React, { PureComponent } from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Bienvenue from "./components/Bienvenue/Bienvenue";
import moi1 from './assets/sprite1.gif';
import moi2 from './assets/sprite2.gif';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Bienvenue nom="Nathan" age={27} occupation="Dj" img={moi1}></Bienvenue>
     <Bienvenue nom="Tristan" age={32} occupation="Star" img={moi2}></Bienvenue>
       </div>  
);
