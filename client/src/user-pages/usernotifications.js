// Notifications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/user/userNotification.css'
export default function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications from the backend
        axios.get('http://localhost:5000/api/notifications')
            .then(response => {
                setNotifications(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the notifications!", error);
            });
    }, []);

    return (
        <div className="notifications-container">
            <div className="notifications-header">
                <h2>Notifications</h2>
            </div>
            <ul className="notifications-list">
                {notifications.map(notification => (
                    <li key={notification.id} className="notification-item">
                        <span role="img" aria-label="bell">🔔</span> {notification.title}
                        <div className="due-date">
                            <span role="img" aria-label="clock">🕒</span> Due: {notification.dueDate}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
