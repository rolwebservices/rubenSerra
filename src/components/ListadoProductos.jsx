import React from 'react'
import CardProducto from './CardProducto'
import './ListadoProductos.css'


function ListadoProductos() {
  return (
    <div className='listadoproductos'>
        <h1>Listado de Productos</h1>
        {/* Listado que consuma muchas cards de productos que se actualice al hacer click en alguna categoria y se pueda
        limpiar la elección de categoria para que se vuelvan a mostrar varios*/}
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
    </div>
  )
}

export default ListadoProductos