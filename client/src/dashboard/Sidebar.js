// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaFolder, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">TaskDash</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home/dashboard" activeClassName="active-link">
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/projects" activeClassName="active-link">
              <FaFolder /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/notifications" activeClassName="active-link">
              <FaBell /> Notifications
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/logout" className="logout">
        <FaSignOutAlt /> Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
