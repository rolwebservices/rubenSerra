import React from 'react'
import Hero from './Hero'
import Categorias from './Categorias'
import QuienesSomos from './QuienesSomos'
import Contacto from './Contacto'
import Footer from './Footer'


function Home() {
    return (
        <>
            <Hero />
            <Categorias />
            <QuienesSomos />
            <Contacto />
            <Footer />
        </>
    )
}

export default Home