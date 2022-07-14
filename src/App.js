import React from 'react'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './component/About'
import Update from './component/Update'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Update />} />

      </Routes>
    </BrowserRouter>

      
  )
}

export default App;