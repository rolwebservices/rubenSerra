import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header>
    <nav className='container'>
        {/* <picture>
            <img src="" alt="" />
        </picture> */}
            <a href="http://">Inicio</a>
            <a href="http://">Nosotros</a>
            <a href="http://">Contacto</a>
            <a href="http://">Tienda</a>
    </nav>
    </header>
  )
}

export default Header