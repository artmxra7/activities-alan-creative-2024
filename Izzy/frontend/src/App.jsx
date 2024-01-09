import { Fragment, useState } from 'react'
import Navbar from './elements/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './elements/Footer'
import Profile from './pages/Profile'

function App() {
  return(
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Fragment>
  )
}

export default App
