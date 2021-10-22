import React from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import axios from "../axios";
import { useStateProvider } from "../context/StateProvider";

const SignIn = () => {
  const [{ user }, dispatch] = useStateProvider();
  const history = useHistory();
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   emailId: data.get("email"),
    //   password: data.get("password"),
    // });
    axios
      .post("/login", {
        emailId: data.get("email"),
        password: data.get("password"),
      })
      .then(function (response) {
        console.log(response);
        dispatch({
          type: "SET_USER",
          user: response.data.message,
        });
        history.push("/dashboard");
        // console.log(response.headers.get("set-cookie"));
        // axios.post("/dashboard").then((response) => console.log(response));
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <div className="SigninForm">
      <h1>Login Page</h1>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              border: "1px solid grey",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
