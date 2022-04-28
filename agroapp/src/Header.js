import React from 'react'
import "./header.css"


function Header() {
  return (
    <header className="header">
        <div className='header__menu'>
            <h1 class="logo"> Agr@ppWeb</h1>
            <div className="header__nav">
                <a class="menu__link select" href="index.html" >Inicio</a>
                <a class="menu__link " href="#info">Productos</a>
                <a class="menu__link " href="#contactenos">Contactenos</a>
                <a class="menu__link " href="#nosotros" >Mi cuenta</a>
                <a class="menu__link " href="#contactenos">Registrarse</a>
            </div>
        </div>
    </header>
  )
}

export default Header