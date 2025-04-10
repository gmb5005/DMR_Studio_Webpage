// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message); // Success message
      } else {
        setMessage(data.message); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Display login success or failure message */}
      {message && <p className="login-message">{message}</p>}

      {/* Back to Main button */}
      <Link to="/" className="back-to-main-button">Back to Main</Link>

      {/* Register button */}
      <Link to="/register" className="register-button">Register</Link>
    </div>
  );
}
