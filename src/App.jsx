import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Description from './components/Description'
import Galery from './components/Galery'
import Cotizador from './components/Cotizador'
import  Activities from './components/Activities'
import Book from './components/Book'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Description/>
      <Galery/>
      <Cotizador/>
      <Activities/>
      <Book/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
