import React from 'react'
import "./home.css"

function home() {
  return (
    <div className='home'>
        <div className='home__banner'>
            <h1>Agr@pp</h1>
            <button className='boton'>Conocenos</button>
        </div>

        <div className='home__content'>
        <h1 className='titulo1'>¡Ultimos productos registrados! categorizados</h1>
            <div className='home__content__title'>
           
                <h2>Verduras</h2>
            </div>
            <div className='home__content__clusters'>
                
                    <a href='' className='imagen1'>
                    <div >
                        <h3>Pepino</h3>
                        </div>
                    </a>

                    <a href='' className='imagen2'>
                    <div >
                        <h3>Lechuga</h3>
                        </div>
                    </a>

                    <a href='' className='imagen3'>
                    <div >
                        <h3>Tomate</h3>
                        </div>
                    </a>

                    <a href='' className='imagen4'>
                    <div >
                        <h3>Apio</h3>
                        </div>
                    </a>

                    <a href='' className='imagen5'>
                    <div >
                        <h3>Papa</h3>
                        </div>
                    </a>

                    <a href='' className='imagen6'>
                    <div >
                        <h3>Calabaza</h3>
                        </div>
                    </a>

            </div>
        
        </div>
    </div>
  )
}

export default home