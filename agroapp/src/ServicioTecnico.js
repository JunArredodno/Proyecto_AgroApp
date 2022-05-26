import React from 'react'
import {  Link } from "react-router-dom";

function ServicioTecnico() {
  return (
    <div>
        <a  Name='contactenos'  ></a>
        <div className='home_contacto'>
            <form className='contactanos'>
                <h2 className='titulo4'>Envianos tu queja:</h2>
                <input type="nombre" name="name" placeholder='Nombre' required></input>
                <input type="email" name="name" placeholder='correo'  required></input>
                ELIGE TU ROL:<select>
                    <option>Comprador</option>
                    <option>Surtidor</option>
                </select>
                <textarea name='escribe' className='texx' id='tex' cols={30}  rows placeholder='Escribe tu mensaje aqui'  ></textarea>
                <Link className='submit' to="/">Enviar</Link>
            </form>
        </div>
    </div>
  )
}

export default ServicioTecnico