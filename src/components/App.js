// src/App.js
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Playground from './Playground';


const App = () => {
  const [isAuthenticated, setAuth] = useState(false);

  const handleLogin = () => {
    setAuth(true);
  };

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Router>
      <div className="main-container">
        <p>{isAuthenticated ? 'Logged in, Now you can enter Playground' : 'You are not authenticated, Please login first'}</p>
        <nav>
          <ul>
            <li>
              <Link to="/playground">PlayGround</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={
            <LoginPage 
              isAuthenticated={isAuthenticated} 
              handleLogin={handleLogin} 
              handleLogout={handleLogout} 
            />} 
          />
          <Route path="/playground" element={
           isAuthenticated ? <Playground /> : <Navigate to="/login" replace />
          } />
          <Route path="*" element={<div className="main-container">Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
