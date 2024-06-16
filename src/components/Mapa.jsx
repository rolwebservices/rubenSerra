import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
delete
L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Mapa = () => {
    const position = [-34.60, -58.38];

  return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100%', overflow: hidden }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Ubicación.
          </Popup>
        </Marker>
      </MapContainer>
  )
}

export default Mapa