import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "../styles/App.css";
import Home from "./Home";
import Login from "./Login";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <Navigation isAuthenticated={isAuthenticated} />
        <Switch>
          <Route path="/login">
            <Login setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <PrivateRoute path="/home" component={Home} isAuthenticated={isAuthenticated} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
