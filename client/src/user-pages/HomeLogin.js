import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaProjectDiagram, FaBell, FaUser } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/user/HomeLogin.css'; // Create and style HomeLogin.css as needed

const HomeLogin = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const goToProjects = () => navigate('/projects');
  const goToNotifications = () => navigate('/notifications');
  const goToProfile = () => navigate('/profile');

  return (
    <div className="home-login-container">
      <h1>Welcome, User!</h1> {/* You can personalize this with user data if available */}
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