import React, { useState } from 'react';
import './../../styles/User/userprofile.css';

export default function UserProfile() {
  // State for storing user details
  const [user, setUser] = useState({
    name: ' ',
    email: ' ',
    cell: ' ',
    username: ' ',
    bio: " ",
  });

  const [showModal, setShowModal] = useState(false); // Controls modal visibility

  // Toggle the modal display
  const handleEditClick = () => {
    setShowModal(true);
  };

  // Handle input changes in the modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Save the edited details and close the modal
  const handleSave = () => {
    setShowModal(false);
  };

  return (
    <div id="profile-page">
      <div id="left-section">
        <div id="profile-board">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP2je-KiPK5IQa4SyN7GsR7NtyoyjmOnTQQ&s" alt="profile pic" id="profile-pic" />
          <h1>{user.name}</h1>
          <h2>User</h2>
        </div>

        <div id="bio-section">
          <h1>Bio</h1>
          <p>{user.bio}</p>
        </div>
      </div>

      <div id="right-section">
        <h1>User Profile</h1>
        <h4>Name/Surname: <span className="details">{user.name}</span></h4>
        <hr />
        <br />
        <h4>Email: <span className="details">{user.email}</span></h4>
        <hr />
        <br />
        <h4>Cell: <span className="details">{user.cell}</span></h4>
        <hr />
        <br />
        <h4>Username: <span className="details">{user.username}</span></h4>
        <br />
        <button id="edit-profile" onClick={handleEditClick}>Edit profile</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Your Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cell"
              placeholder="Cell"
              value={user.cell}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
            />
            <textarea
              name="bio"
              placeholder="Bio"
              value={user.bio}
              onChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
