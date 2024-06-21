import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Tienda from './components/Tienda'
/* import { MarvelProvider } from './context/MarvelContext';
import CharacterList from './components/CharacterList'; */



function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/rubenSerra' element={<Home />}/>
        <Route path='/tienda' element={<Tienda />}/>
      </Routes>
    </BrowserRouter>
      
      {/* <MarvelProvider>
        <CharacterList/>
      </MarvelProvider> */}
    </>
  )
}

export default App
