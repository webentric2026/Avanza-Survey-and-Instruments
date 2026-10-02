import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Instrument from './pages/Instrument.jsx'
import Leadership from './pages/Leadership.jsx'
import Contact from './pages/contact/Contact.jsx'
import Services from './pages/services/Services.jsx'
import Blog from './pages/blog/Blog.jsx'
import BlogPost from './pages/blog/BlogPost.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'
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
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App