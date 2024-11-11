import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notification from './pages/notification';
import Userprofile from './pages/userprofile';
import Signup from './pages/Signup';
import MemberLog from './pages/memberLogin';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Bars from './components/bars';
import About from './pages/About';
import Footer from './components/footer';
import Adminprofile from './pages/adminProfile';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <BrowserRouter>
      <Bars toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <div className={`content ${showSidebar ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/memberlogin" element={<MemberLog />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/adminprofile" element={<Adminprofile />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
