import React, { useEffect, useState } from 'react';
import '../styles/user/userNotification.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/notifications');
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      {error && <p className="error">{error}</p>}
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification.id} className="notification-card">
              <h2>{notification.title}</h2>
              <p>{notification.message}</p>
              <span>{new Date(notification.date).toLocaleString()}</span>
            </li>
          ))
        ) : (
          <p>No notifications to display.</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
