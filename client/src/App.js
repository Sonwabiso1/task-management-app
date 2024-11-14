import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

//Components
import NavbarLayout from './components/NavbarLayout';
// Landing Page imports
import Signup from './landing-pages/Signup';
import Home from './landing-pages/Home';
import Login from './landing-pages/Login';

//logged-in pages
import HomeLogin from './user-pages/HomeLogin';
import AdminProjects from './admin-pages/AdminProjects';


function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route element={<NavbarLayout />}> {/* Conditional rendering for logged-in routes */}
      <Route path="/logged-in-home" element={<HomeLogin />} />
          {/* Add more logged-in user pages here */}
      <Route path="/adminprojects" element={<AdminProjects/>}/>
    </Route>
    <Route path="/logout" element={<Home />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
