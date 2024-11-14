import React, { useState } from 'react';
import { FaHome, FaUser, FaBell, FaProjectDiagram, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // For page navigation and highlighting the active page
import './Navbar.css';
import logo from "./../assets/logo.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); // Used to get the current route and highlight active page

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Home Link */}
        <Link to="/home" className={`sidebar-item ${location.pathname === '/home' ? 'active' : ''}`}>
          <FaHome />
          <span>Home</span>
        </Link>

        {/* User Profile Link */}
        <Link to="/profile" className={`sidebar-item ${location.pathname === '/profile' ? 'active' : ''}`}>
          <FaUser />
          <span>User Profile</span>
        </Link>

        {/* Notifications Link */}
        <Link to="/notifications" className={`sidebar-item ${location.pathname === '/notifications' ? 'active' : ''}`}>
          <FaBell />
          <span>Notifications</span>
        </Link>

        {/* Projects Link */}
        <Link to="/projects" className={`sidebar-item ${location.pathname === '/projects' ? 'active' : ''}`}>
          <FaProjectDiagram />
          <span>Projects</span>
        </Link>

        {/* Logout Button */}
        <div className="sidebar-item-logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="top-nav">
        {/* Icons */}
        <div className="top-icons">
          <Link to="/notifications">
            <FaBell className={`top-icon ${location.pathname === '/notifications' ? 'active' : ''}`} />
          </Link>
          <Link to="/profile">
            <FaUser className={`top-icon ${location.pathname === '/profile' ? 'active' : ''}`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


