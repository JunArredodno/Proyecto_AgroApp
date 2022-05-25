import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Header from './Header';
import App from './App';
//import Home from './Home'
import Micuenta from './Micuenta'
import Conocenos from './Conocenos';
/*import Modal from './components/Modal';*/
import MapView from './components/MapView';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element ={<App />} />
      <Route path="/micuenta" element={<Micuenta />} />
      <Route path="/conocenos" element={<Conocenos />} />
      <Route path="/mapa" element={< MapView/>} />
      {/*<Route path="/modal" element={<Modal />} />*/}
    </Routes>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
