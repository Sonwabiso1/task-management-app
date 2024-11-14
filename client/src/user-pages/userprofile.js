import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/user/userprofile.css';

export default function UserProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Hailey Williams',
        email: 'haileyblast23@gmail.com',
        cell: '0715627951',
        username: 'Hailey345',
        bio: 'A very passionate developer based in Cape Town. Unmatched passion. I love long walks on the beach with my dog, "tugboat".'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        axios.put('http://localhost:5000/api/profile', profile)
            .then(response => {
                setIsEditing(false);
                console.log('Profile updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    return (
        <div className="user-profile-container">
            <div className="profile-card">
                <div className="profile-picture" />
                <h2>{profile.name}</h2>
                <p>User</p>
                <div className="bio-section">
                    <h3>Bio</h3>
                    {isEditing ? (
                        <textarea name="bio" value={profile.bio} onChange={handleChange} />
                    ) : (
                        <p>{profile.bio}</p>
                    )}
                </div>
            </div>

            <div className="profile-info">
                <h3>User profile</h3>
                <div className="profile-details">
                    <label>
                        Name Surname:
                        {isEditing ? (
                            <input type="text" name="name" value={profile.name} onChange={handleChange} />
                        ) : (
                            <span>{profile.name}</span>
                        )}
                    </label>
                    <label>
                        Email:
                        {isEditing ? (
                            <input type="email" name="email" value={profile.email} onChange={handleChange} />
                        ) : (
                            <span>{profile.email}</span>
                        )}
                    </label>
                    <label>
                        Cell:
                        {isEditing ? (
                            <input type="text" name="cell" value={profile.cell} onChange={handleChange} />
                        ) : (
                            <span>{profile.cell}</span>
                        )}
                    </label>
                    <label>
                        Username:
                        {isEditing ? (
                            <input type="text" name="username" value={profile.username} onChange={handleChange} />
                        ) : (
                            <span>{profile.username}</span>
                        )}
                    </label>
                </div>
                <button onClick={isEditing ? handleSave : handleEdit} className="edit-save-button">
                    {isEditing ? 'Save' : 'Edit profile'}
                </button>
            </div>
        </div>
    );
}
