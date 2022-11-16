import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Header from './Header';
import App from './App';
//import Home from './Home'
//import Micuenta from './Micuenta'
import Micuenta from './components/inicioSesion/Micuenta';
import Conocenos from './Conocenos';
//import Registro from './Registro';
import Registro from './components/registro/Registro';
/*import Modal from './components/Modal';*/
import MapView from './components/MapView';
import ServicioTecnico from './ServicioTecnico';
import PosUsuario from './components/PosUsuario';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element ={<App />} />
      <Route path="/micuenta" element={<Micuenta />} />
      <Route path="/conocenos" element={<Conocenos />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/mapa" element={< MapView/>} />
      <Route path="/posicion" element={< PosUsuario/>} />
      <Route path="/tecnico" element={<ServicioTecnico />} />
    </Routes>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
