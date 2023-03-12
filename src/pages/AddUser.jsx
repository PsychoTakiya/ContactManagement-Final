import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";

export default function AddUser({onAddUsers}) {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleAddUser = (event) => {
    const addUser = { firstName, middleName, lastName, phoneNumber, email, password };
    console.log(addUser)
    onAddUsers(addUser);
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
      <form action="" method="post" onSubmit={handleAddUser}>
        <div className="input-firstname">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter First Name*"
            variant="outlined"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="input-middlename">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Middle Name*"
            variant="outlined"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </div>
        <div className="input-lastname">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Last Name*"
            variant="outlined"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="input-phone">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Phone Number*"
            variant="outlined"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="input-email">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Email*"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            
          >
            CLEAR
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
}
