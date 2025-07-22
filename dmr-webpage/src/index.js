import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './index.css';
import MainPage from './main/MainPage';
import LoginPage from './login/Login';
import RegistrationPage from './login/RegistrationPage';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Main page route */}
          <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
          <Route path="/register" element={<RegistrationPage />} /> {/* Registration page route */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
