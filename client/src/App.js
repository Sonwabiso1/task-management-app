import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Landing Page Imports
import Signup from './pages/Landing Pages/Signup';
import MemberLog from './pages/Landing Pages/memberLogin';
import About from './pages/Landing Pages/About';

// User Imports
import UserProjects from './pages/User/userProjects';
import UserTasks from './pages/User/userTasks';
import UserNotifications from './pages/User/userNotifications';
import Userprofile from './pages/User/userprofile';

// Admin Imports
import Adminprofile from './pages/Admin/adminProfile';
import Admintasks from './pages/Admin/adminTasks';
import AdminProjects from './pages/Admin/adminProjects';

// Components Imports
import Bars from './components/bars';
import Footer from './components/footer';
import TaskPage from './components/TaskPage';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <BrowserRouter>
    <Adminprofile />
    <AdminProjects />
    <Admintasks />
      {/* Always render the Sidebar */}
      <Bars toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      
      <div className={`content ${showSidebar ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Define Routes */}
        <Routes>
          {/* Landing Pages */}
          <Route path="/" element={<Signup />} />
          <Route path="/memberlogin" element={<MemberLog />} />
          <Route path="/about" element={<About />} />
          
          {/* User Pages */}
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/tasks" element={<UserTasks />} />
          <Route path="/projects" element={<UserProjects />} />
          <Route path="/notification" element={<UserNotifications />} />

          {/* Admin Pages */}
          <Route path="/adminprofile" element={<Adminprofile />} />
          <Route path="/adminprojects" element={<AdminProjects />} />
          <Route path="/admintasks" element={<Admintasks />} />

          {/* Task Page for specific project */}
          <Route path="/projects/:projectId" element={<TaskPage />} />

          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>

      {/* Always render Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
