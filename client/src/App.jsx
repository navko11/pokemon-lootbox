import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RegistrationForm from './registeruser'
import Login from './userlogin'
import Home from './home'
import Inventory from './inventory'
import Lootboxpage from './lootboxpage'
import ShopPage from './shop'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/register' element={<RegistrationForm/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/lootbox' element={<Lootboxpage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
