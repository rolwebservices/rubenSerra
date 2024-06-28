import React from 'react'
import './Header.css'
import { useState } from 'react'
import logo from '/LOGORUBENSERRA.png'
import { Link } from 'react-router-dom'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <header>
      <nav className='container'>
        <picture className='nav__logo'>
          <Link className='logo__link' to="/rubenSerra">
            <img src={logo} alt="Logo Ruben Serra" />
          </Link>
        </picture>
        <div className={`nav__items ${isOpen ? 'open' : ''}`}>
          <Link to="/rubenSerra" onClick={handleLinkClick}>Inicio</Link>
          <Link to="#nosotros" onClick={handleLinkClick}>Nosotros</Link>
          <Link to="/admin" onClick={handleLinkClick}>Contacto</Link>
          <Link to="/tienda" onClick={handleLinkClick}>Tienda</Link>
          <Link to="/login" onClick={handleLinkClick}>Iniciar Sesion</Link>
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