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
        
        
            <div className='home__content__title'>
                <h2>Frutas   </h2>
            </div>
            <div className='home__content__clusters'>
                
                    <a href='' className='imagen1'>
                    <div >
                        <h3>Lulo</h3>
                        </div>
                    </a>

                    <a href='' className='imagen2'>
                    <div >
                        <h3>Mora</h3>
                        </div>
                    </a>

                    <a href='' className='imagen3'>
                    <div >
                        <h3>Tomate de arbol</h3>
                        </div>
                    </a>

            </div>
      

        
            <div className='home__content__title'>
                <h2>Legumbres</h2>
            </div>
            <div className='home__content__clusters'>
                
                    <a href='' className='imagen1'>
                    <div >
                        <h3>Frijol</h3>
                        </div>
                    </a>

                    <a href='' className='imagen2'>
                    <div >
                        <h3>Arbeja</h3>
                        </div>
                    </a>

                    <a href='' className='imagen3'>
                    <div >
                        <h3>Habichuela</h3>
                        </div>
                    </a>
                    

            </div>
            
        </div>
        <a href="http://" class="product">VER MAS PRODUCTOS</a>

        <div className='destacado'>
                
                    
                    <div className='imagen10'>
                        
                        </div>
                    

                    <div className='descripcion1'>
                    <h1 class="nom">Nombre del producto: </h1>
                    <h1 class="agri">Nombre del agricultor: </h1>
                    <h1 class="des">Decripcion del producto: </h1>
                    
                        </div>
                   
            </div>

            <div className='home_contacto'>

                
        </div>
    </div>
  )
}

export default home