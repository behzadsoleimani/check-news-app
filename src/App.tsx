import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Explore from "./pages/explore";
import Saved from "./pages/saved";
import Profile from "./pages/profile";


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="Saved" element={<Saved />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
