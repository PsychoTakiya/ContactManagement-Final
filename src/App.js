import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import {useState} from 'react';
import AddUser from "./pages/AddUser";

function App() {
  const [users, setUsers] = useState([]); //Users -> SignUp & Login
  const [addUsers, setAddUsers] = useState([]); // AddUsers 
  const [editing, setEditing] = useState(false)
  const [editUser, setEditUser] = useState([])

  //store the state users from signup and pass it onto login
  const handleSignUp = (user) => {
    setUsers([...users, user]);
    alert('Sign up successful! Please login.');
  };
  const handleDelete = (addUser) =>{
    setAddUsers( addUser)
    alert('Delete Succesfull');
  }
  const handleEdit = (addUser) =>{
    setEditing(true);
    setEditUser(addUser);
  }

  const handleFlag = () => {
    setEditing(false);
  }
  
  const handleAddUser = (addUser) => {
    setAddUsers([...addUsers, addUser])
    alert('Succesfully added Users!');
  }
  //prompt login success
  const handleLogin = (user) => {
    alert(`Welcome back, ${user.username}!`);
  };
  
  return (
    <div className="App">
        <div>
        <Header/>
        </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login users={users} onLogin={handleLogin} />}></Route>
          <Route path="/signup" element={<Signup onSignUp={handleSignUp} />}></Route>
          <Route path="/home" element={<Home addUsers ={addUsers} onDelete ={handleDelete}  onEdit ={handleEdit}/>}></Route>
          <Route path="/addUser" element={<AddUser flag= {editing} editUser={editUser} onFlagChange ={handleFlag}onAddUsers={ handleAddUser} />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;