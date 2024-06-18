import React from 'react'
import './Contacto.css'
import MapView from './Mapa'
import { MdOutlinePhoneAndroid, MdOutlineLocationOn, MdMailOutline } from "react-icons/md";

const Contacto = () => {

  return (
    <div className='contacto'>
      <h1 className='body__titulos'>CONTACTO</h1>
      <MapView />
      <ul className='contacto__lista'>
        <li className='contacto__item'><MdOutlinePhoneAndroid size={30} /> 030303456</li>
        <li className='contacto__item'><MdOutlineLocationOn size={30} />MITRE 123, RAWSON</li>
        <li className='contacto__item'><MdMailOutline size={30}/> algo@gmail.com </li>
      </ul>
    </div>
  )
}

export default Contacto