import React from 'react'
import "./conocenos.css"
function Conocenos() {
  return (
    <div className='content'>
      <div className='contenedor'>
        <div className="nosotros">
              <h1 className='titulo_nosotros'>¿Quienes somos?</h1>
              <p>Somos una microempresa que, a travéz de la tecnplogia permitimos que la gente del Calvario los productos que suelen vender de forma directa, sencilla, y sin intermediarios.</p>
              <img className='imagen20' ></img>
          </div>
        
          <div class="mision">
          <h3 class='titulo_nosotros2'>Mision</h3>
              <p>Nuestro proyecto es un emprendimiento que elimina el uso de intermediarios en el proceso de compra y venta de productos agrícolas a través de nuestra aplicación web, permitiendo así la comercialización directa entre el surtidor y comprador, acordando el punto de reunión en el que se entregarán los productos solicitados, y así mejorar los ingresos y la calidad de vida de los surtidores</p>
              <img className='imagen20' ></img>
          </div>
          <div class="vision">
              <h3 className='titulo_nosotros3'>Visión</h3>
              <p>Tenemos como objetivo el expandir nuestro modelo de servicio a toda Colombia, y con esto mejorar el estado de vida de los campesionos colombianos, siendo el Calvario nuestro punto de partida hacia una Colombia que tiene al campo como un sector que también puede mejorar la ecónomia y calidad de vida de los ciudadanos a travez de la tecnologia</p>
              <img className='imagen20' ></img>
          </div>
        </div>
    </div>
  )
}

export default Conocenos