import { React, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import './styles/form.css'; 

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/login', {username, password})
      .then(result => {
        console.log(result) 
        if(result.data === "Success") {
            navigate('/home')
        }
      })
      .catch(error => console.log(error))
    }
  
    return (
      <div className="form-container">
        <h1 className="form-title">Login</h1>
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
          <button className="form-button" type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register" className="user-link">Register</Link></p>
      </div>
    );
  }

export default Login;