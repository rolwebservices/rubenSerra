import React from 'react'
import './Header.css'
import { useState } from 'react'
import logo from '/LOGORUBENSERRA.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <nav className='container'>
        <picture className='nav__logo'>
          <a className='logo__link' href="http://">
            <img src={logo} alt="Logo Ruben Serra" />
          </a>
        </picture>
        <div className={`nav__items ${isOpen ? 'open' : ''}`}>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="#tienda">Tienda</a>
          <a href="#tienda">Iniciar Sesion</a>
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