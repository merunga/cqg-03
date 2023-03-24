import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from './Components/Register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/> 
        <Route exact path="/home" element={<Home/>}/>  
      </Routes>
  </Router>
  );
}

export default App;
