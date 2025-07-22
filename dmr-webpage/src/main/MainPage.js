import React, { useState } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function MainPage() {
  const [tab, setTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const tabs = ["Home", "Manga", "", ""];

  // Log the value of user when the component renders
  console.log("MainPage user:", user);

  return (
    <div className='background'>
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
                <Link to="/profile" className="dropdown-item" onClick={() => setMenuOpen(false)}>My Profile</Link>
                <Link to="/mymanga" className="dropdown-item" onClick={() => setMenuOpen(false)}>My Manga</Link>
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
      
      {/* Tab bar with dynamic rendering */}
      <div className="tab-bar">
        {tabs.map((tabName) => (
          <button
            key={tabName}
            className={`tab-button ${tab === tabName ? 'active-tab' : ''}`}
            onClick={() => tabName && setTab(tabName)}
            disabled={!tabName}
          >
            {tabName}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {tab === "Home" && <p className="tab-text">Welcome to the home page!</p>}
        {tab === "Manga" && <p className="tab-text">Explore our manga collection!</p>}
      </div>
    </div>
  );
}
