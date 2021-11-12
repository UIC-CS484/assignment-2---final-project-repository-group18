import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import "./styles.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "150px",
}));

function Dashboard({ auth }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard_newsBlocks">
        <Box sx={{ flexGrow: 0.8 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Item>News 1</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>News 2</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>News 3</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>News 4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>News 5</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>News 6</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );

  // return <div>{user ? <h1>Dashboard</h1> : history.push("/")}</div>;
}

export default Dashboard;
