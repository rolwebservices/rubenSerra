import React from 'react'
import './QuienesSomos.css'
import quienesSomos from '/ban3.jpeg'
const QuienesSomos = () => {

  return (
    <div className='qsomos'>
    <h1 className='body__titulos'>QUIENES SOMOS</h1>
    <picture className='qsomos__box'>
        <img src={quienesSomos} alt="Imagen Empresarial" />
    </picture>
    <p className='qsomos__parrafo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate saepe quibusdam sunt commodi! Vero laborum facere totam quos ipsa cumque, ducimus in magni sed minus obcaecati quo eum officiis nam.</p>
    </div>
  )
}

export default QuienesSomos