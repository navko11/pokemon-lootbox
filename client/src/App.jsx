import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationForm from './registeruser'
import Login from './userlogin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegistrationForm/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
