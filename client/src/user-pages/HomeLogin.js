import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaProjectDiagram, FaBell, FaUser } from 'react-icons/fa';
import '../styles/user/HomeLogin.css';

const HomeLogin = () => {
  const navigate = useNavigate();

  // Navigation handler for projects
  const goToProjects = () => {
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'admin') {
      navigate('/adminprojects'); // Redirect to AdminProjects if user is an admin
    } else {
      navigate('/user-projects'); // Redirect to UserProjects if user is not an admin
    }
  };

  // Other navigation handlers
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