import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// Landing Page imports
import Signup from './pages/Landing Pages/Signup';
import Home from './pages/Landing Pages/Home';

import Footer from './components/footer';
import Login from './pages/Landing Pages/Login';

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
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <BrowserRouter>
      <MainContent showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </BrowserRouter>
  );
}

export default App;
