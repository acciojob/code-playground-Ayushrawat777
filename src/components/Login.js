import React from "react";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogin = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div>
      <p>Login </p>
      <button onClick={handleLogin}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
