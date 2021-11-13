import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import axios from "../axios";

function SignUp() {
  const [value, setValue] = React.useState(null);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post("/createUser", {
        username: data.get("name"),
        emailId: data.get("email"),
        dob: value.toString(),
        password: data.get("password"),
      })
      .then(function (response) {
        console.log(response);
        window.location.href = "/signin";
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(axios);
  };

  // new Date(value);

  return (
    <div className="SignupForm">
      <h1>SignUp Page</h1>
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
              label="Full Name"
              name="name"
              autoFocus
            />

            <div>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  required
                  label="Date of Birth"
                  name="dob"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>

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
              Sign Up
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default SignUp;
