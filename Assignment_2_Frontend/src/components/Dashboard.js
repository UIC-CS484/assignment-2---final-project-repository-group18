import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";

function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = axios
      .post("/dashboard")
      .then(function (response) {
        // console.log(response);
        setIsAuthenticated(true);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {isAuthenticated ? <h1>Dashboard</h1> : history.push("/homepage")}
    </div>
  );
}

export default Dashboard;
