import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Footer from './components/footer';

//Landing Page imports
import Home from './landing-pages/Home';
import Signup from './landing-pages/Signup';
import Login from './landing-pages/Login';

import Dashboard from './dashboard/Dashboard';
import Layout from './dashboard/Layout';
import Projects from './dashboard/Projects';
import Notifications from './dashboard/Notifications'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* Grouped routes under "/home" */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} /> {/* Redirect "/home" to "/home/dashboard" */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
        
        {/* Separate route for "/logout" */}
        <Route path="/logout" element={<Home/>  } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
