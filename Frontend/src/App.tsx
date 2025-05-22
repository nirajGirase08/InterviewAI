import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heropage from './Components/HeroPage/Heropage'
import Tiles from './Components/Tilespage/Tiles'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="/tiles" element={<Tiles />} />
      </Routes>
    </Router>
  )
}

export default App
