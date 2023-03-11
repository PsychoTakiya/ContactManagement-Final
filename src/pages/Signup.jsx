import React, { useState } from "react";
import { Typography, TextField, Button, Divider } from "@mui/material";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    // event.preventDefault();
    const user = { username, phoneNumber, email, password };
    onSignUp(user);
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="header">
        <Typography
          size="small"
          style={{ color: "purple" }}
          variant="h4"
          color="initial"
        >
          Sign Up
        </Typography>
      </div>
      <form action="" method="post" onSubmit={handleSignUp}>
        <div className="input-username">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Username*"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="button">
          <Button
            style={{ margin: "10px" }}
            color="success"
            variant="contained"
            type="submit"
          >
            Sign up
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
