import React, { useState } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const [tab, setTab] = useState("Home");
  const tabs = ["Home", "Manga", "", ""];


  return (
    <div className='background'>
      <div className="header">
        <div className="dmr-text">
          <div>D</div>
          <div>M</div>
          <div>R</div>
        </div>
        <Link to="/login" className="login-button">Login/Register</Link>
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
