import React, { useState } from 'react';
import "./home.css";
import Modal from './components/Modal';
import styled from 'styled-components';

function Home() {
    const [estadoModal0, cambiarEstadoModal0] = useState(false);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
    const [estadoModal7, cambiarEstadoModal7] = useState(false);
    const [estadoModal8, cambiarEstadoModal8] = useState(false);
    const [estadoModal9, cambiarEstadoModal9] = useState(false);
    const [estadoModal10, cambiarEstadoModal10] = useState(false);
    const [estadoModal11, cambiarEstadoModal11] = useState(false);
    const [estadoModal12, cambiarEstadoModal12] = useState(false);
  
    return (
     
    <div className='home'>
       <a  Name='inicio' ></a>
       
        <div className='home__banner'>
            <a href="#productos" className='Compras'>Comprar</a>
            <button className="Vender" onClick={()=> cambiarEstadoModal0(!estadoModal0)}>Vender</button>
        <h1 className='titulo_principal'>Agr@pp</h1>
        </div>
        
        <a  Name='productos'></a>
        <div className='home__content'>
        <h1 className='titulo1'>¡Ultimos productos registrados! categorizados</h1>
            <div className='home__content__title'>
           
                <h2>Verduras</h2>
            </div>
            <div className='home__content__clusters'>
                
                    <a className='imagen1'>                        
                        <div onClick={()=> cambiarEstadoModal1(!estadoModal1)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen2'>
                        <div onClick={()=> cambiarEstadoModal2(!estadoModal2)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen3'>
                        <div onClick={()=> cambiarEstadoModal3(!estadoModal3)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen4'>
                        <div onClick={()=> cambiarEstadoModal4(!estadoModal4)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen5'>
                        <div onClick={()=> cambiarEstadoModal5(!estadoModal5)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen6'>
                        <div onClick={()=> cambiarEstadoModal6(!estadoModal6)}>
                            <button>Comprar</button>
                        </div>
                    </a>

            </div>
        
        
            <div className='home__content__title'>
                <h2>Frutas   </h2>
            </div>
            <div className='home__content__clusters'>
                
                    <a className='imagen7'>
                        <div onClick={()=> cambiarEstadoModal7(!estadoModal7)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen8'>
                        <div onClick={()=> cambiarEstadoModal8(!estadoModal8)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen9'>
                        <div onClick={()=> cambiarEstadoModal9(!estadoModal9)}>
                            <button>Comprar</button>
                        </div>
                    </a>

            </div>
      

        
            <div className='home__content__title'>
                <h2>Legumbres</h2>
            </div>
            <div className='home__content__clusters'>
                
                    <a className='imagen13'>
                        <div onClick={()=> cambiarEstadoModal10(!estadoModal10)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen11'>
                        <div onClick={()=> cambiarEstadoModal11(!estadoModal11)}>
                            <button>Comprar</button>
                        </div>
                    </a>

                    <a className='imagen12'>
                        <div onClick={()=> cambiarEstadoModal12(!estadoModal12)}>
                            <button>Comprar</button>
                        </div>
                    </a>
                    <Modal
                        titulo="Cargar producto"
                        estado={estadoModal0}
                        cambiarEstado={cambiarEstadoModal0}    
                    >                         
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="text" placeholder='Nombre del producto'></input>
                                <input type="number" placeholder='Precio'></input>
                                <input type="number" placeholder='Cantidad'></input>
                                Cosecha:<input type="date"></input>
                            </form>
                            <Boton>Cargar</Boton>
                        </Contenido>
                    </Modal>
                    <Modal
                        titulo="Comprar Pepino:"
                        precio="3000"
                        estado={estadoModal1}
                        cambiarEstado={cambiarEstadoModal1}    
                    >                         
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo='Comprar Lechuga:'
                        precio='2000'
                        estado={estadoModal2}
                        cambiarEstado={cambiarEstadoModal2}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Tomate chonto:"
                        precio="5000"
                        estado={estadoModal3}
                        cambiarEstado={cambiarEstadoModal3}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Apio:"
                        precio="1200"
                        estado={estadoModal4}
                        cambiarEstado={cambiarEstadoModal4}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Papa:"
                        precio="1400"
                        estado={estadoModal5}
                        cambiarEstado={cambiarEstadoModal5}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>
                    
                    <Modal
                        titulo="Comprar Calabaza:"
                        precio="4000"
                        estado={estadoModal6}
                        cambiarEstado={cambiarEstadoModal6}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Lulo:"
                        precio="4000"
                        estado={estadoModal7}
                        cambiarEstado={cambiarEstadoModal7}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Mora:"
                        precio="2500"
                        estado={estadoModal8}
                        cambiarEstado={cambiarEstadoModal8}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Tomate de arbol:"
                        precio="4000"
                        estado={estadoModal9}
                        cambiarEstado={cambiarEstadoModal9}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Habichuela:"
                        precio="6000"
                        estado={estadoModal10}
                        cambiarEstado={cambiarEstadoModal10}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>

                    <Modal
                        titulo="Comprar Arbeja:"
                        precio="000"
                        estado={estadoModal11}
                        cambiarEstado={cambiarEstadoModal11}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>
                    
                    <Modal
                        titulo="Comprar Frijol:"
                        precio="000"
                        estado={estadoModal12}
                        cambiarEstado={cambiarEstadoModal12}    
                    >                                
                        <Contenido>
                            <form onSubmit={() => {
                                console.log(this);
                            }}>
                                <input type="number" placeholder='Cantidad'></input>
                            </form>
                            <Boton>Aceptar</Boton>
                        </Contenido>
                    </Modal>
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

export default Home

const Boton = styled.button`
  display: block;
  padding: 2%;
  color: #fff;
  border: none;
  background: #1766DC;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  transition: .5 ease all;

  &:hover{
      background: #0066ff;
  }

`;

const Contenido= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-weight: 500;
    font-size: 150%;
    color: #1766DC;
  }
   img{
       width: 100%;
       vertical-align: top;
       border-radius: 3%;
   }

`;
