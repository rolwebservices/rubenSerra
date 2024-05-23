import React, { useContext } from 'react';
import { MarvelContext } from '../context/MarvelContext';
import './CharacterList.css'

const CharacterList = () => {
  const { characters, loading } = useContext(MarvelContext);

  if (loading) return <p>Cargando personajes...</p>;

  return (
    <div className='lista'>
      <h2>Personajes de Marvel</h2>
      <ul>
        {characters.map((character) => (
          <li className='character_box' key={character.id}>
            <h3>{character.name}</h3>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
