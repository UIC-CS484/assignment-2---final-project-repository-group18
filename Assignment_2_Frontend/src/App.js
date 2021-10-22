import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { useStateProvider } from "./context/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateProvider();

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <p>Header</p>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </header> */}
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          {user ? (
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          ) : (
            <div>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
            </div>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
