import React,{useState} from "react";
import { Typography, TextField, Button, Divider } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Typography
// } from '@ellucian/react-design-system/core';

export default function Login({ users, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    console.log(users)

  const handleLogin = (event) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      onLogin(user);
      navigate("/home");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <Typography style={{ color: "purple" }} variant="h4" color="initial">
          Login
        </Typography>
      </div>
      <form onSubmit={handleLogin}>
        <div className="input-username">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter username*"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-password">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter password*"
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
            Login
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
            onClick={() => navigate("/signup")}
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}
