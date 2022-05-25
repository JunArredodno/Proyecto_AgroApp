import React from 'react'

import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Marcador from './Marcador'
import './mapview.css'

const MapView=()=> {
  return <MapContainer center={{lat:'4.35232078944695', lng:'-73.7138462755166'}} zoom={13}>{/*Coordenadas iniciales (El Calvario)*/}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors" />{/*Lienzo del mapa, y derechos de autor*/}
        <Marcador/>
    </MapContainer>
  
}

export default MapView