import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/user/userprofile.css';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUser();
  }, [id]);

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="user-profile">
      {user ? (
        <>
          <h1>{user.name}</h1>
          <div className="user-info">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Organization:</strong> {user.organization}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
            <p><strong>Last Updated:</strong> {new Date(user.updatedAt).toLocaleDateString()}</p>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;