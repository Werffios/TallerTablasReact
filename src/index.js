import React from "react";
import ReactDOM from 'react-dom/client';
import {Aplicacion} from './Componentes_generales';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>
);
