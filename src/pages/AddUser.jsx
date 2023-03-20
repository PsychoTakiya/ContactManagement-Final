import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";

export default function AddUser({ onAddUsers,flag, editUser, onFlagChange }) {
  
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({
    firstName:editUser.firstName,
    middleName:editUser.middleName,
    lastName : editUser.lastName,
    phoneNumber : editUser.phoneNumber,
    email:editUser.email,
  })
  let navigate = useNavigate();
 
  console.log(editUser.firstName+ "HEYYYYYYY " )
  console.log(state.firstName+ "HEYYYYYYY " )

  const handleAddingUser = ()=>{
    const addUser = {
      firstName,
      middleName,
      lastName,
      phoneNumber,
      email,
      password,
    };
    console.log(addUser);
    onAddUsers(addUser);
    navigate("/home");
  }

  const handleEditUser = ()=>{
    Object.keys(editUser).map(res =>
     { 
      if(res === "firstName")  {editUser[res] = state.firstName }
      if(res === "middleName")  {editUser[res] = state.middleName }
      if(res === "lastName")  {editUser[res] = state.lastName }
      if(res === "phoneNumber")  {editUser[res] = state.phoneNumber }
      if(res === "email")  {editUser[res] = state.email }
     }
     )
  }

  const handleAddUser = (event) => {
    event.preventDefault();
    if (flag) {
      handleEditUser()
      onFlagChange()
      alert("Data has been Successfully edited")
      navigate("/home");
    }
    else{
      handleAddingUser()
    }
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
      <form action="" method="post" onSubmit={ handleAddUser}>
        <div className="input-firstname">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter First Name*"
            variant="outlined"
            value={flag? state.firstName:firstName}
            onChange={(event) => flag? setState({...state,firstName:event.target.value}): setFirstName(event.target.value)}
          />
        </div>
        <div className="input-middlename">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Middle Name*"
            variant="outlined"
            value={flag? state.middleName:middleName}
            onChange={(event) => flag? setState({...state,middleName:event.target.value}):setMiddleName(event.target.value)}
          />
        </div>
        <div className="input-lastname">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Last Name*"
            variant="outlined"
            value={flag?state.lastName:lastName}
            onChange={(event) => flag? setState({...state,lastName:event.target.value}):setLastName(event.target.value)}
          />
        </div>
        <div className="input-phone">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Phone Number*"
            variant="outlined"
            value={flag?state.phoneNumber:phoneNumber}
            onChange={(event) => flag? setState({...state,phoneNumber:event.target.value}):setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="input-email">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Email*"
            variant="outlined"
            value={flag?state.email:email}
            onChange={(event) => flag? setState({...state,email:event.target.value}):setEmail(event.target.value)}
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