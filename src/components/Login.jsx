import React from 'react'
import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className='login'>
      <form action="" className='login__form'>
        <input type="text" name="" id="" placeholder='Usuario' />
        <input type="password" name="" id="" placeholder='Contraseña' />
        <Link to="/admin">
          <button>Iniciar Sesión</button>
        </Link>
      </form>
    </section>
  )
}

export default Login