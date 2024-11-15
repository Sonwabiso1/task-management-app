import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaProjectDiagram, FaBell, FaUser } from 'react-icons/fa';
import '../styles/user/HomeLogin.css';

const HomeLogin = ({ user }) => { // Accept 'user' prop from parent component or context
  const navigate = useNavigate();

  // Navigation handlers
  const goToProjects = () => navigate('/projects/:id');
  const goToNotifications = () => navigate('/notifications/:id');
  const goToProfile = () => navigate('/profile/:id');

  return (
    <div className="home-login-container">
      {/* Display user's name dynamically */}
      <h1>Welcome, {user?.name || 'User'}!</h1>
      <p>What would you like to do today?</p>
      <div className="options-container">
        <div className="option-card" onClick={goToProjects}>
          <FaProjectDiagram className="icon" />
          <p>Projects</p>
        </div>
        <div className="option-card" onClick={goToNotifications}>
          <FaBell className="icon" />
          <p>Notifications</p>
        </div>
        <div className="option-card" onClick={goToProfile}>
          <FaUser className="icon" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;