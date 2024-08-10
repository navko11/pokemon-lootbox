import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import './styles/form.css';  // Import the CSS file

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {username, password})
    .then(result => console.log(result))
    navigate('/login')
    .catch(error => console.log(error))
  }


  return (
    <div className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">Username:</label>
        <input
          className="form-input"
          placeholder="Enter username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-label" htmlFor="password">Password:</label>
        <input
          className="form-input"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button" type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login" className="user-link">Login</Link></p>
    </div>
  );
}

export default RegistrationForm;