import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { AuthProvider } from './AuthContext';
import './index.css';
import MainPage from './main/MainPage';
import LoginPage from './login/Login';
import RegistrationPage from './login/RegistrationPage';
import reportWebVitals from './reportWebVitals';
import MyMangaPage from './user_pages/MyMangaPage'; // Import MyMangaPage
import ProfilePage from './user_pages/Profile'; // Import ProfilePage if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Main page route */}
          <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
          <Route path="/register" element={<RegistrationPage />} /> {/* Registration page route */}
          <Route path="/mymanga" element={<MyMangaPage />} /> {/* My Manga page route */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Profile page route, if needed */}
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
