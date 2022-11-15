import React, { useRef } from 'react';
import '../../registro.css';
{/*import {  Link } from "react-router-dom";*/}

export default function Registro(props) {

  const refUsuario=useRef(null);

  const handleLogin=()=>{

  }

  return (
    <div className='micuenta1'>
      <form className="formulario2"    >
        <h1 className='titulo_sesion'>Registrarse</h1>
        <input className='nombre' type="text" placeholder='nombre' ref={refUsuario}></input>
        <input className='cedula' type="number" placeholder='Cedula'></input>
        <input className='correo' type="email" placeholder='Correo'></input>
        <input className='contra' type="password" placeholder='Contraseña'></input>
        {/*<Link className='enviar' to="/">Enviar</Link>*/}
        {/*Boton nuevo a ver si funciona*/}
        <button onClick={handleLogin} className="btn btn-info btn-lg btn-block">Enviar</button>
      </form>    
    </div>
  )
}