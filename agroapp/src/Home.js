import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'


function home() {
  return (
     
    <div className='home'>
       <a  Name='inicio' ></a>
       
        <div className='home__banner'>
        <h1 className='titulo_principal'>Agr@pp</h1>
        </div>
        <a  Name='productos'></a>
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
                
                    <a href='' className='imagen7'>
                    <div >
                        <h3>Lulo</h3>
                        </div>
                    </a>

                    <a href='' className='imagen8'>
                    <div >
                        <h3>Mora</h3>
                        </div>
                    </a>

                    <a href='' className='imagen9'>
                    <div >
                        <h3>Tomate de arbol</h3>
                        </div>
                    </a>

            </div>
      

        
            <div className='home__content__title'>
                <h2>Legumbres</h2>
            </div>
            <div className='home__content__clusters'>
                
                    <a href='' className='imagen13'>
                    <div >
                        <h3>Habichuela</h3>
                        </div>
                    </a>

                    <a href='' className='imagen11'>
                    <div >
                        <h3>Arbeja</h3>
                        </div>
                    </a>

                    <a href='' className='imagen12'>
                    <div >
                        <h3>Frijol</h3>
                        </div>
                    </a>
                    

            </div>
            
        </div>
       
        <a href="http://" class="product">VER MAS PRODUCTOS</a>
        <h1 className='producto'>Producto destacado</h1>
        <div className='destacado'>
              
                    
                    <div className='imagen10'>
                        
                        </div>
                    

                    <div className='descripcion1'>
                    <h1 class="nom">Nombre del producto: </h1>
                    <h1 class="agri">Nombre del agricultor: </h1>
                    <h1 class="des">Decripcion del producto: </h1>
                    
                        </div>
                   
            </div>

            <a  Name='contactenos'  ></a>
            <div className='home_contacto'>
            <form className='contactanos'>
            <h2 className='titulo4'>¡Contactanos!</h2>
            <input type="nombre" name="name" placeholder='Nombre' required />
            <input type="email" name="name" placeholder='correo'  required/>
            <textarea name='escribe' className='texx' id='tex' cols={30}  rows placeholder='Escribe tu mensaje aqui'  ></textarea>
          
            <input type="submit" value="Enviar" className='submit' />
            </form>
                
        </div>
    </div>
  )
}

export default home