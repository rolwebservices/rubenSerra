import React from 'react'
import './DetalleProducto.css'
import Producto from '/LOGORUBENSERRA.png'

function DetalleProducto() {
  return (
    <div className="detalleProducto">
        <picture className="producto__imagen">
            <img src={Producto} alt="" />
        </picture>
        <div className='producto__datos'>
        <h3 className='producto__titulo'>Titulo Producto</h3>
        <p className='producto__descripcion'>Descripcion del producto</p>
        <p className='producto__precio'>$XXXXX</p>
        <p className='producto__cuotas'>Llevalo en x cuotas</p>
        <button className='producto__boton'>Agregar al Carrito</button>
        </div>

        <div className='producto__especificaciones'>
        <h3 className='especificaciones__titulo'>Especificaciones Tecnicas</h3>
        <div className='especificaciones__box'>
        <h4 className='especificaciones__subtitulo'>Caracteristicas</h4>
        <div className='especificaciones__lista'>
        <ul className='especificaciones__atributo'>
            <li>Atributo 1</li>
            <li>Atributo 2</li>
            <li>Atributo 3</li>
            <li>Atributo 4</li>
            <li>Atributo 5</li>
        </ul>
        <ul className='especificaciones__valor'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </div>
        </div>
        </div>

    </div>

  )
}

export default DetalleProducto