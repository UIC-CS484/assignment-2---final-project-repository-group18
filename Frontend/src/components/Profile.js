import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "../axios";
import "./styles.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/dashboard")
      .then(function (response) {
        console.log(response);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  const deleteProfile = () => {
    axios
      .post("/deleteUser", { emailId: user.emailId })
      .then(function (response) {
        console.log(response);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <div className="profile">
      <ThemeProvider theme={theme}>
        UserInfo:
        <p>Name: {user?.username}</p>
        <p>Email: {user?.emailId}</p>
        <p>Date of birth: {user?.dob}</p>
        <TextField fullWidth label="Name" id="fullWidth" />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
        <Button
          type="submit"
          fullWidth
          onClick={deleteProfile}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Delete Profile
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Profile;
