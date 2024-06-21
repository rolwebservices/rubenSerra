import React from 'react'
import { FaSearch } from "react-icons/fa";
import './BarraBusqueda.css'



function BarraBusqueda() {
  return (
    <div className='busqueda'>
        <div className='busqueda__container'>
        <i className='busqueda__icono'><FaSearch /></i>
        <input className='busqueda__input' type="text" placeholder="Buscar producto" />
        </div>
    </div>
  )
}

export default BarraBusqueda