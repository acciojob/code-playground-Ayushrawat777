import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <Link to="/login">Login</Link> | <Link to="/home">Home</Link>
      <p>Status: {isAuthenticated ? "Logged In" : "Logged Out"}</p>
    </nav>
  );
};

export default Navigation;
