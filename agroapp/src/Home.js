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
            <div className='home__content__title'>
                <h2>Verduras</h2>
            </div>
            <div className='home__content__clusters'>
                <div>
                    <a className='imagen1' href=''>
                        <h3>Pepino</h3>
                        <img scr="" alt=''></img>
                    </a>
                </div>
                <div>
                    <a href=''>
                        <h3>Lechuga</h3>
                        <img scr="" alt='error404'></img>
                    </a>
                </div>
                <div>
                    <a href=''>
                        <h3>Tomate</h3>
                        <img scr="./img/tomate_chonto.jpg" alt='error404'></img>
                    </a>
                </div>
                <div>
                    <a href=''>
                        <h3>Apio</h3>
                        <img scr="" alt='error404'></img>
                    </a>
                </div>
                <div>
                    <a href=''>
                        <h3>Papa</h3>
                        <img scr="" alt='error404'></img>
                    </a>
                </div>
                <div>
                    <a href=''>
                        <h3>Calabaza</h3>
                        <img scr="" alt='error404'></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default home