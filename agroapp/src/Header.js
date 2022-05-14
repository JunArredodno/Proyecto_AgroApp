import React from 'react'
import "./header.css"

import {  Link } from "react-router-dom";

function Header() {
  return (
   
    <header className="header">
        <div className='header__menu'>
            <h1 className="logo"> Agr@ppWeb</h1>
            <div className="header__nav">
                <a class="menu__link" href="#inicio">Inicio</a>
                <a class="menu__link" href="#productos">Productos</a>
                <a class="menu__link" href="/modal">Modal</a>
                <a class="menu__link" href="#contactenos">Contactenos</a>
                <Link class="menu__link " to="/conocenos" >Conocenos</Link>
                <Link class="menu__link " to="/Micuenta" >Mi cuenta</Link>
                <Link class="menu__link " to="#contactenos">Registrarse</Link>
            </div>
        </div>
    </header>
  
  )
}

export default Header