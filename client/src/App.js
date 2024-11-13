import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Landing Page imports
import Signup from './pages/Landing Pages/Signup';
import MemberLog from './pages/Landing Pages/memberLogin';
import About from './pages/Landing Pages/About';
//User Imports
import UserProjects from './pages/User/userProjects';
import UserTasks from './pages/User/userTasks';
import UserNotifications from './pages/User/userNotifications';
import Userprofile from './pages/User/userprofile';
//Admin Imports
import Adminprofile from './pages/Admin/adminProfile';
import Admintasks from './pages/Admin/adminTasks';
import AdminProjects from './pages/Admin/adminProjects';
//Components Imports
import Bars from './components/bars';
import Footer from './components/footer';


function App() {
  {/*const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };*/}

  return (
    <Admintasks />
    /*<BrowserRouter>
      <Bars toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <div className={`content ${showSidebar ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<UserTasks />} />
          <Route path="/memberlogin" element={<MemberLog />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/notification" element={<UserNotifications />} />
          <Route path="/projects" element={<UserProjects />} />
          <Route path="/adminprofile" element={<Adminprofile />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>*/
    
  );
}

export default App;
