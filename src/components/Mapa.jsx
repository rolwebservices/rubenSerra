import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'



function MapView() {
    return (
        <MapContainer center={{ lat: '-31.53650', lng: '-68.51857' }} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-31.53650, -68.51857]}>
            </Marker>
        </MapContainer>
    )
}

export default MapView