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

function App() {
  const user = useContext(myContext);

  const history = useHistory();
  useEffect(() => {
    return () => {
      onLoad();
    };
  }, []);

  // console.log(user);

  const onLoad = async () => {
    console.log("called onload on reload");
    await axios
      .post("/dashboard")
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          // dispatch({
          //   type: "SET_USER",
          //   user: res.data,
          // });

          // setIsAuthenticated(true);
          // setUserDetails(res.data.message);
          history.push("/dashboard");
        } else {
          console.log("False");
        }
      })
      .catch((err) => {
        console.log(err.response);

        // setIsAuthenticated(false);
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

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {!user ? (
            <div>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
            </div>
          ) : (
            <h1>Access Denied</h1>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
