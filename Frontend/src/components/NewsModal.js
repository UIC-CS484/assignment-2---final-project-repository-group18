import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { TextField } from "@mui/material";
// import axios from "../axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 6,
};

const NewsModal = () => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpen = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        setComments(res.data.value);
        setOpen(true);
      })
      .catch((err) => console.log(err.response));
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open comments</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comments
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            {}
          </Typography>
          <TextField
            variant="outlined"
            label="Add your comment"
            color="secondary"
            focused
          />
        </Box>
      </Modal>
    </div>
  );
};

export default NewsModal;
