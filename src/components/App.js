import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
 NavLink,
  Navigate,
  Outlet,
} from "react-router-dom";
// react router dom version 5 was used here
import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

const App = () => {
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  return (
    <Router>
      <div className="main-container">
        <div>
          {isLoggedIn
            ? "Logged in, Now you can enter Playground"
            : "You are not authenticated, Please login first"}
        </div>
        <ul>
          <li>
            <NavLink to="/">PlayGround</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>

        <Routes>
          <Route
            exact
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} SetisLoggedIn={SetisLoggedIn} />
            }
          />

          <Route
            exact
            path="/"
            element={<PrivateRoute isAuthenticated={isLoggedIn} />}
          >
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route
           path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
