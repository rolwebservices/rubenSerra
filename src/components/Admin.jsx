import React from 'react'
import './Admin.css'
import { useState } from 'react';

function Admin() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

  return (
    <section className='login'>
        <form action="" className='login__form'>
            <input type="text" name="" id="" placeholder='Usuario' />
            <input type="password" name="" id="" placeholder='Contraseña'/>
            <button>Iniciar Sesión</button>
        </form>
    </section>
  )
}

export default Admin