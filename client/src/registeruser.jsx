import React, { useState } from 'react';
import './styles/form.css';  // Import the CSS file

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">Username:</label>
        <input
          className="form-input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="password">Password:</label>
        <input
          className="form-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="form-button" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;