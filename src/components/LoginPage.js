// src/LoginPage.js
import React from 'react';

const LoginPage = ({ isAuthenticated, handleLogin, handleLogout }) => {
  return (
    <div className="main-container">
      <p>Login</p>
      {!isAuthenticated ? (
        <button onClick={handleLogin}>Log In</button>
      ) : (
        <>
          
          <button onClick={handleLogout}>Log Out</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
