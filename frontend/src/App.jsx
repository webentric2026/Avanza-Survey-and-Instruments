import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Instrument from './pages/Instrument.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rental" element={<Instrument />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App