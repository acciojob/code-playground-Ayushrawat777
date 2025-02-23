import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <p>
          {isAuthenticated
            ? "✅ Logged in, Now you can enter playground"
            : "❌ You are not authenticated, Please login first"}
        </p>
        <ul>
          <li>
            <Link to="/private">PlayGround</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        {/* Use Switch instead of Routes */}
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            )}
          />
          <PrivateRoute path="/private" isAuthenticated={isAuthenticated} />
          <Route component={<p>page not found</p>} /> {/* Catch-all route for 404 */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

