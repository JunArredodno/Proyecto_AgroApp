import React from 'react'
import {  Link } from "react-router-dom";
import "./mi_cuenta.css"

function Micuenta() {
  return (
    <div className='micuenta'>
       
        <from className="formulario">
        <h1 className='titulo_sesion'>Inicio de sesion</h1>
        <input className='cedula' type="number" placeholder='Cedula'></input>
        <input className='contra' type="password" placeholder='Contraseña'></input>
        <Link className='enviar' to="/">Enviar</Link>
        </from>
        
    </div>
  )
}

export default Micuenta