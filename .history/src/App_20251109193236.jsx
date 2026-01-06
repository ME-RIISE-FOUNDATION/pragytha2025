import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home'
import Events from './Events'
import Contact from './Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/rulebook.pdf" element={null} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App