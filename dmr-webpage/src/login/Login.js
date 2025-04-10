// Login.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Login.css';

export default function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      {/* Back to Main button */}
      <Link to="/" className="back-to-main-button">Back to Main</Link>
    </div>
  );
}
