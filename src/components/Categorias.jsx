import React from 'react'
import './Categorias.css'
import imagen from '../assets/react.svg'
const Categorias = () => {
  return (
    <>
      <h1 className='body__titulos'>CATEGORIAS</h1>
      <ul className='categorias__caja'>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
        <li className='categorias__card'>
          <h3 className='categorias__titulo'>Categoria</h3>
          <img src={imagen} alt="" srcset="" />
        </li>
      </ul>
        {/*
      Adaptar este codigo a categoria con foto
      {characters.map((character) => (
        <li className='character_box' key={character.id}>
          <h3>{character.name}</h3>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </li>
      ))} */}

    </>
  )
}

export default Categorias