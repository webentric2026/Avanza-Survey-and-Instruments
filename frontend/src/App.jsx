import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Instrument from './pages/Instrument.jsx'
import Leadership from './pages/Leadership.jsx'
import Contact from './pages/contact/Contact.jsx'
import ScrollToTop from './utils/ScrollToTop.jsx'
import FloatingButtons from './utils/FloatingButtons.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rental" element={<Instrument />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App