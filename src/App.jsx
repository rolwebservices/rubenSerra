import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Categorias from './components/Categorias'
/* import { MarvelProvider } from './context/MarvelContext';
import CharacterList from './components/CharacterList'; */
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Categorias/>
      <QuienesSomos/>
      <Contacto/>
      <Footer />
      {/* <MarvelProvider>
        <CharacterList/>
      </MarvelProvider> */}
    </>
  )
}

export default App
