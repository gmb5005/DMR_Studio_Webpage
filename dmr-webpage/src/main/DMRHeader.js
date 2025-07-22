import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './MainPage.css';

export default function DMRHeader({ isHome = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div>
        <div className="header">
        <div className="dmr-text">
            <div>D</div>
            <div>M</div>
            <div>R</div>
        </div>
        {!user ? (
            <Link to="/login" className="login-button">Login/Register</Link>
        ) : (
            <div className="menu-square" onClick={() => setMenuOpen(v => !v)} tabIndex={0}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            {menuOpen && (
                <div className="dropdown-menu">
                {!isHome ? (
                    <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>Home</Link>
                ) : null }
                <Link to="/profile" className="dropdown-item" onClick={() => setMenuOpen(false)}>My Profile</Link>
                <Link to="/mymanga" className="dropdown-item" onClick={() => setMenuOpen(false)}>My Manga</Link>
                <Link to="/logout" className="dropdown-item" onClick={() => setMenuOpen(false)}>Logout</Link>
                </div>
            )}
            </div>
        )}
        </div>
        <div className="line-container">
            <div className="line"></div>
            <span className="sub-header">Studios</span>
            <div className="line"></div>
        </div>
    </div>
  );
}
