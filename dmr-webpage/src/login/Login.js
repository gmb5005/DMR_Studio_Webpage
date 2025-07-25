import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { handleSubmit } from './utils';
import { useAuth } from '../AuthContext';
import DMRHeader from '../main/DMRHeader';

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => handleSubmit(e, formData, setMessage, 'login', setUser, navigate);

  return (
    <div>
      <DMRHeader />
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
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
    </div>
  );
}