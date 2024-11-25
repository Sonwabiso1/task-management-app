import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHome, FaUser, FaBell, FaProjectDiagram, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { id } = useParams(); // Retrieve the user ID from the URL

  return (
    <nav className="sidebar">
      <div className="logo-image">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <Link to={`/logged-in-home/${id}`} className="sidebar-item">
        <FaHome /> Home
      </Link>
      <Link to={`/userprofile/${id}`} className="sidebar-item">
        <FaUser /> User Profile
      </Link>
      <Link to={`/notifications/${id}`} className="sidebar-item">
        <FaBell /> Notifications
      </Link>
      <Link to={`/projects/${id}`} className="sidebar-item">
        <FaProjectDiagram /> Projects
      </Link>
      <Link to="/" className="sidebar-item sidebar-item-logout">
        <FaSignOutAlt /> Logout
      </Link>
    </nav>
  );
};

export default Navbar;