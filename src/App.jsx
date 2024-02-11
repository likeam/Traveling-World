import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { hero } from './Data/travigodata'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero hero={hero} />
      <Footer />
    </>
  )
}

export default App
