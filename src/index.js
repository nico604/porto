import React from "react";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//import routes from './routes';
import Bienvenue from './components/Bienvenue/Bienvenue';
import Discog from './components/Discog/Discog';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

//import styles from './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="bienvenue" element={<Bienvenue />} />
      <Route path="apidiscogs" element={<Discog />} />
    </Routes>
  </BrowserRouter>
);

