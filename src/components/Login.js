import React from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const history = useHistory();

  const handleLogin = () => {
    setIsAuthenticated(true);
    history.push("/home"); // Redirect to Home after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
