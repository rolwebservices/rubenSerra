import React from 'react'
import './Contacto.css'
import Slider from './Slider'


const Contacto = () => {

  const images = [
    {src: '../public/ban1.jpeg', link: '#', alt: 'Promo x'},
    {src: '../public/ban2.jpeg', link: '#', alt: 'Promo y'},
    {src: '../public/ban3.jpeg', link: '#', alt: 'Promo z'}
  ]

  return (
    <>
      <h1 className='body__titulos'>CONTACTO</h1>
      <ul>
        <li>030303456</li>
        <li>dirección</li>
        <li>correo</li>
      </ul>
    </>
  )
}

export default Contacto