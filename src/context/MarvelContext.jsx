/* import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const ts = new Date().getTime();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
      const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
      const hash = md5(ts + privateKey + publicKey);

      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
          params: {
            ts,
            apikey: publicKey,
            hash
          }
        });
        setCharacters(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <MarvelContext.Provider value={{ characters, loading }}>
      {children}
    </MarvelContext.Provider>
  );
};

export { MarvelContext, MarvelProvider };
 */