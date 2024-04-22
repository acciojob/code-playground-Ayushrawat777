import React from "react";

const Login = ({isLoggedIn ,SetisLoggedIn}) => {
  return (
    <div>
      <p>Login</p>
      <button
        onClick={() => {
          SetisLoggedIn(!isLoggedIn);
        }}
      >
        {!isLoggedIn ? "Log In" : "Log Out"}
      </button>
    </div>
  );
};

export default Login;

