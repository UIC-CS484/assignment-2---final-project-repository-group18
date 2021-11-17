import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import axios from "./axios";
import { myContext } from "./context/Context";
import TickerSelection from "./components/TickerSelection";
import Profile from "./components/Profile";
import CryptoChart from "./components/Chart";

function App() {
  const { user } = useContext(myContext);
  console.log("user", user);
  const history = useHistory();
  useEffect(() => {
    return () => {
      onLoad();
    };
  }, []);

  const onLoad = async () => {
    console.log("called onload on reload");
    await axios
      .post("/dashboard")
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          history.push("/dashboard");
        } else {
          console.log("False");
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {user ? (
            <div>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/tickers">
                <TickerSelection />
              </Route>
              <Route path="/chart" component={CryptoChart} />{" "}
              {/* Different cuz sending props to CryptoChart from Dashboard via Link later*/}
              <Route path="/userProfile">
                <Profile />
              </Route>
            </div>
          ) : (
            <div>
              {/* <h1>Access Denied </h1> */}
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
