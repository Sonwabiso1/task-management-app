import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// Landing Page imports
import Signup from './pages/Landing Pages/Signup';
import Home from './pages/Landing Pages/Home';

import Footer from './components/footer';

//Landing Page imports
import Home from './landing-pages/Home';
import Signup from './landing-pages/Signup';
import Login from './landing-pages/Login';

import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import Projects from './pages/Projects';
import Notifications from './pages/Notifications'

function MainContent({ showSidebar, toggleSidebar }) {
  const location = useLocation();
  const isUserProfile = location.pathname === '/userprofile';

  return (
    <>
      {/* Conditionally render Bars based on the current path */}
      {!isUserProfile && <Bars toggleSidebar={toggleSidebar} showSidebar={showSidebar} />}
      <div className={`content ${showSidebar && !isUserProfile ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<UserTasks />} />
          <Route path="/memberlogin" element={<MemberLog />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/notification" element={<UserNotifications />} />
          <Route path="/projects" element={<UserProjects />} />
          <Route path="/adminprofile" element={<Adminprofile />} /> */}
      {/* </div> */}
      <Footer />
    </>
  );
}

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
