import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";

export default function AddUser({onAddUser}) {
  let navigate = useNavigate();

  const handleAddUser = (event) => {
    const addUser = { firstName, middleName, lastName, phoneNumber, email, password };
    onAddUser(addUser);
    navigate("/home");
  };

  return (
    <div className="user-container">
      <div className="header">
        <Typography
          size="small"
          style={{ color: "purple" }}
          variant="h5"
          color="initial"
        >
          ENTER USER DETAILS
        </Typography>
      </div>

      <div className="input-firstname">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter First Name*"
          variant="outlined"
        />
      </div>
      <div className="input-middlename">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter Middle Name*"
          variant="outlined"
        />
      </div>
      <div className="input-lastname">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter Last Name*"
          variant="outlined"
        />
      </div>
      <div className="input-phone">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter Phone Number*"
          variant="outlined"
        />
      </div>
      <div className="input-email">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter Email*"
          variant="outlined"
        />
      </div>
      <div className="input-password">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter Password*"
          variant="outlined"
        />
      </div>
      <div className="button">
        <Button
          style={{ margin: "10px" }}
          color="success"
          variant="contained"
          type="submit"
        >
          CLEAR
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
          onClick={() => navigate("/home")}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
