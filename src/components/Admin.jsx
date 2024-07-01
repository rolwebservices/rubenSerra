import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'


function Admin() {
  return (
    <section className='admin'>
      <Link>
        <button>Agregar Producto</button>
      </Link>
      <Link>
        <button>Eliminar Producto</button>
      </Link>
      <Link>
        <button>Modificar Producto</button>
      </Link>
    </section>
  )
}

export default Admin