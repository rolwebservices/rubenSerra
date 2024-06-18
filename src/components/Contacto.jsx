import React from 'react'
import './Contacto.css'
import MapView from './Mapa'


const Contacto = () => {

  return (
    <>
      <h1 className='body__titulos'>CONTACTO</h1>
      <MapView/>
      <ul>
        <li>030303456</li>
        <li>dirección</li>
        <li>correo</li>
      </ul>
    </>
  )
}

export default Contacto