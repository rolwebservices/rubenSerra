import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <ul className='footer__list'>
            <li className='footer__item'>Rubén Serra e Hijos</li>
            <li className='footer__item'>Lunes a Viernes de xx a xx</li>
            <li className='footer__item'><a href="http://">Nosotros</a></li>
            <li className='footer__item'><a href="http://">Contacto</a></li>
            <li className='footer__item'><a href="http://">Tienda</a></li>
        </ul>
        <p>Desarrollado por ROL</p>
        <p>Copyright © 2024</p>
    </footer>
  )
}

export default Footer