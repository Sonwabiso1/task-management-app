import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBell, FaProjectDiagram, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="logo-image">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <Link to="/logged-in-home" className="sidebar-item">
        <FaHome /> Home
      </Link>
      <Link to="/user-profile" className="sidebar-item">
        <FaUser /> User Profile
      </Link>
      <Link to="/notifications" className="sidebar-item">
        <FaBell /> Notifications
      </Link>
      <Link to="/projects" className="sidebar-item">
        <FaProjectDiagram /> Projects
      </Link>
      <Link to="/home" className="sidebar-item sidebar-item-logout">
        <FaSignOutAlt /> Logout
      </Link>
    </nav>
  );
};

export default Navbar;