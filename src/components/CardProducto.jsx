import React from 'react'
import './CardProducto.css'
import Producto from '/LOGORUBENSERRA.png'


function CardProducto() {
  return (
    <div className='cardProducto'>
        <picture className='cardProducto__img'>
            <img src={Producto} alt="Imagen de producto" />
        </picture>
        <div className='cardProducto__info'>
            <h3 className='producto__titulo'>Aire acondicionado x marca x modelo x detalles</h3>
            <p className='producto__precio'>$45000</p>
            <p className='producto__cuotas'>LLEVALO EN X CUOTAS</p>
        </div>
    </div>
  )
}

export default CardProducto