import React from 'react'
import './Header.css'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
    <nav className='container'>
        {/* <picture>
            <img src="" alt="" />
        </picture> */}
        <div className='nav__logo'>RSeH</div>
        <div className={`nav__items ${isOpen ? 'open' : ''}`}>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="#tienda">Tienda</a>
        </div>
        <div className={`nav__toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
          </div>
    </nav>
    </header>
  )
}

export default Header