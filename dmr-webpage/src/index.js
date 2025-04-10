import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './index.css';
import MainPage from './MainPage';
import LoginPage from './login/Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main page route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
