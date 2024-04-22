import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
// react router dom version 5 was used here

import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";

// Custom PrivateRoute component
const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <div className="main-container">
          <div>
            {isLoggedIn
              ? "Logged in, Now you can enter Playground"
              : "You are not authenticated, Please login first"}
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">PlayGround</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route
              path="/login"
              element={<Login login={this.login} isLogged={isLoggedIn} />}
            />
            <Route
              exact
              path="/"
              element={<PrivateRoute isAuthenticated={isLoggedIn} />}
            >
              <Route exact path="/" element={<Home />} />
            </Route>

            <Route element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
