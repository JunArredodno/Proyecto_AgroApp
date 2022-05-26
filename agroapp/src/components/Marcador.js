import React from 'react'
import { Marker } from 'react-leaflet'
import { Icono } from './icono'
const Marcador = () => {
  return (
    <Marker position={{lat:"4.120388389906761", lng:"-73.6439100742377"}} icon={Icono} />
  )
}

export default Marcador