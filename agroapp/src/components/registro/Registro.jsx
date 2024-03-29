import React, { useRef } from 'react';
import "../../registro.css";
import { Link } from 'react-router-dom';
const URL_Regis="http://localhost/Proyecto_AgroApp/Proyecto_AgroApp/agroapp/complementos_php/register.php";
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



export default function Registro(props) {

  const refUsuario=useRef(null);
  const refCorreo=useRef(null);
  const refCedula=useRef(null);
  const refContra=useRef(null);

  const handleLogin= async()=>{
    const data={
      "nombre":refUsuario.current.value,
      "cedula":refCedula.current.value,
      "contra":refContra.current.value,
      "correo":refCorreo.current.value
    };
    /*if(data==0){
      alert("ingreso mal");
    }else{}*/
    const respJson=await enviarDatos(URL_Regis, data);
    console.log(respJson);
    props.acceder(respJson.conectado);
  }

  return (
    <div className='micuenta1'>
      <form className="formulario2"    >
        <h1 className='titulo_sesion'>Registrarse</h1>
        <input className='nombre' type="text" placeholder='nombre' ref={refUsuario}></input>
        <input className='cedula' type="number" placeholder='Cedula' ref={refCedula}></input>
        <input className='correo' type="email" placeholder='Correo' ref={refCorreo}></input>
        <input className='contra' type="password" placeholder='Contraseña' ref={refContra}></input>
        <button onClick={handleLogin} className="enviar">Enviar</button>
        <Link className="enlace" to="/">Iniciar sesion</Link>
      </form>    
    </div>
  )
}