import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//Landing Page imports
import Signup from './pages/Landing Pages/Signup';
import Home from './pages/Landing Pages/Home';

import Footer from './components/footer';
import Login from './pages/Landing Pages/Login';

import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import Projects from './pages/Projects';
import Notifications from './pages/Notifications'


function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <BrowserRouter>
      {/* <Bars toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <div className={`content ${showSidebar ? 'sidebar-open' : 'sidebar-closed'}`}> */}
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
          {/* <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<UserTasks />} />
          <Route path="/memberlogin" element={<MemberLog />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/notification" element={<UserNotifications />} />
          <Route path="/projects" element={<UserProjects />} />
          <Route path="/adminprofile" element={<Adminprofile />} /> */}
      {/* </div> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
