import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login/Login'
import useToken from './useToken';
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));

}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
