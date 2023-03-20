import React, { useState } from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
 
const Home = ({addUsers, onDelete, onEdit }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(addUsers);
  
  console.log(users)
  const handleEdit = (item) => {
    onEdit(item);
    navigate('/AddUser')
  }
 
  const handleDelete = (index) => {
     const updatedData = users.filter((user, i )=>i!==index);
    setUsers(updatedData)
    onDelete(updatedData)
  };
 
  return (
    <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Middle Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item,index) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.middleName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(item)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div >
    <Button
      style={{ margin: "10px" }}
      variant="contained"
      color="secondary"
      onClick={() => navigate('/AddUser')}
    >
      Add  User
    </Button>
  </div>
  </>
  );
};
 
export default Home;