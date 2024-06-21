import React from 'react'
import Hero from './Hero'
import Categorias from './Categorias'
import BarraBusqueda from './BarraBusqueda'
import ListadoProductos from './ListadoProductos'
import Footer from './Footer'


function Tienda() {
  return (
    <>
    <Hero/>
    <BarraBusqueda/>
    <Categorias/>
    <ListadoProductos/>
    <Footer />
    </>
  )
}

export default Tienda