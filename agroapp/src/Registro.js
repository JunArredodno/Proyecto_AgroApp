import React from 'react'
import {  Link } from "react-router-dom";
import "./registro.css"

function registro() {
  return (
    <div className='micuenta1'>

    <form className="formulario2"    >

     <h1 className='titulo_sesion'>Registrarse</h1>
    <input className='nombre' type="text" placeholder='nombre'></input>
    <input className='cedula' type="text" placeholder='Cedula'></input>
    <input className='correo' type="text" placeholder='Correo'></input>
    <input className='contra' type="password" placeholder='Contraseña'></input>
    <Link className='enviar' to="/">Enviar</Link>
    </form>
       
    
</div>
  )
}

export default registro