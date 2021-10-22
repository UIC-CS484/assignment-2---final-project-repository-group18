import React from "react";
import { Box } from "@mui/system";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useStateProvider } from "../context/StateProvider";
import axios from "../axios";

const Navbar = () => {
  const [{ user }, dispatch] = useStateProvider();
  console.log(user);
  const logout = () => {
    axios
      .post("/logout", {})
      .then((response) => {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">Test</Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Navbar
            </Typography>
            {!user ? (
              <div>
                <Button color="inherit">
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button color="inherit">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            ) : (
              <h3>
                {`Hi ${
                  user?.username.split(" ")[0].charAt(0).toUpperCase() +
                  user?.username.split(" ")[0].slice(1)
                }!
                `}
              </h3>
            )}
            {user ? (
              <Button color="inherit">
                <Link to="/" onClick={logout}>
                  Log out
                </Link>
              </Button>
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
