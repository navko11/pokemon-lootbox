import React, { useState } from 'react';
import axios from 'axios'

import './styles/form.css';  // Import the CSS file

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('', {username, password})
    .then(result => console.log(result))
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
    </div>
  );
}

export default RegistrationForm;