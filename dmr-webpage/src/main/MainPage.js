import React, { useState } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import DMRHeader from './DMRHeader';

export default function MainPage() {
  const [tab, setTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const tabs = ["Home", "Manga", "", ""];

  // Log the value of user when the component renders
  console.log("MainPage user:", user);

  return (
    <div className='background'>
      <DMRHeader isHome={true} />
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
