import React, { useEffect, useState, useContext } from "react";
import { Box } from "@mui/system";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import axios from "../axios";
import "./styles.css";
import { myContext } from "../context/Context";

const Navbar = ({ auth }) => {
  const user = useContext(myContext);
  console.log(user);
  // const [{ user }, dispatch] = useStateProvider();
  const [data, setData] = useState(auth);
  // console.log(auth, user);

  const logout = async () => {
    await axios
      .post("/logout", {})
      .then((response) => {
        // dispatch({
        //   type: "SET_USER",
        //   user: null,
        // });
        console.log(response);
        if (response.status == 200) window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Styles
  const linkStyle = {
    textDecoration: "none",
    fontWeight: "600",
    color: "white",
  };
  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Button variant="outlined" color="inherit">
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </Button>
            {/* <Button color="inherit">Test</Button> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cryptobase
            </Typography>
            {!user ? (
              <div className="nav_buttons">
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" color="inherit">
                    <Link to="/signin" style={linkStyle}>
                      Sign In
                    </Link>
                  </Button>
                  <Button variant="outlined" color="inherit">
                    <Link to="/signup" style={linkStyle}>
                      Sign Up
                    </Link>
                  </Button>
                </Stack>
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
              <Button variant="outlined" color="inherit">
                <Link to="/" onClick={logout} style={linkStyle}>
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
