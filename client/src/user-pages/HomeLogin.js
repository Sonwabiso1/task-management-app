import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaProjectDiagram, FaBell, FaUser } from 'react-icons/fa';
import '../styles/user/HomeLogin.css';

const HomeLogin = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Retrieve the user ID from the URL
  const [user, setUser] = useState(null);

  // Fetch user data by ID
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error('Failed to fetch user:', data.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  // Navigation handlers
  const goToProjects = () => navigate(`/projects/${id}`);
  const goToNotifications = () => navigate(`/notifications/${id}`);
  const goToProfile = () => navigate(`/profile/${id}`);

  return (
    <div className="home-login-container">
      {/* Display a role-based welcome message */}
      <h1>
        Welcome, {user?.name || 'User'}! {user && user.role && `(Role: ${user.role})`}
      </h1>
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
