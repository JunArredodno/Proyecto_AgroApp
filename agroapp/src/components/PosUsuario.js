import React, { useEffect, useState } from 'react'
import {  Link } from "react-router-dom";

const PosUsuario = () => {
    const [state,setState]=useState({
        longitude:0,
        latitude:0,
    })
    /*Funcion que contendrá los metodos de geolocalizacion */
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(
        /*Se establece la posicion que ponga el usuario */
        function(position){
            setState({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            })
        },
        /*En caso de error*/
        function(error){
            console.log(error)
        },
        /*Pide la posicion por gps*/
        {
            enableHighAccuracy: true
        },
    )
  },[])

  return (
    <div>
        <h1 className='titulo_nosotros'>Localizacion</h1>
        <p>longuitud: {state.longitude}</p>
        <p>Latitud: {state.latitude}</p>
        <Link to={{pathname:"/mapa",state}}>Ver mi ubicación</Link>
    </div>
  )
}

export default PosUsuario