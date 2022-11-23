import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "../../mi_cuenta.css";
const URL_LOGIN="http://localhost/Proyecto_AgroApp/Proyecto_AgroApp/agroapp/complementos_php/login.php";//antiguamente http://localhost/complementos_php/login.php
{/*funcion asincrona para enviar los datos*/}

const enviarDatos=async(url,data)=>{
  
  const resp= await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  });
  const json= await resp.json();
  console.log("Jason:"+json)
  return json;
}



export default function Micuenta(props) {

  const refUsuario=useRef(null);
  const refContra=useRef(null);

  const handleLogin= async()=>{
    const data={
      "cedula":refUsuario.current.value,
      "contra":refContra.current.value
    };
    const respJson=await enviarDatos(URL_LOGIN, data);
    console.log(respJson);
    props.acceder(respJson.conectado);
  }

  return (
    <div className='micuenta'>       
        <from className="formulario">
          <h1 className='titulo_sesion'>Inicio de sesion</h1>
          <input className='cedula' type="number" placeholder='Cedula' ref={refUsuario}></input>
          <input className='contra' type="password" placeholder='Contraseña' ref={refContra}></input>
          <button className='enviar' onClick={handleLogin}>Ingresar</button>
          <span className='enlace'>¿Sin cuenta?<Link to="/registro">Resgistrese</Link></span>          
        </from>
    </div>
  )
}

