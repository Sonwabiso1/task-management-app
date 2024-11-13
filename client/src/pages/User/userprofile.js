import React, { useState } from 'react';
import './../../styles/User/userprofile.css';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    cell: '',
    username: '',
    bio: '',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP2je-KiPK5IQa4SyN7GsR7NtyoyjmOnTQQ&s'
  });

  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser((prevUser) => ({ ...prevUser, profileImage: e.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    setShowModal(false); // Close modal after saving
  };

  const handleCancel = () => {
    setShowModal(false); // Close modal when cancel is clicked
  };

  return (
    <div className="profile-page">
      <div className="left-column">
        <div id="left-section" className="card purple-card">
          <div id="profile-board">
            <img src={user.profileImage} alt="profile pic" id="profile-pic" />
            <input type="file" accept="image/*" onChange={handleImageChange} className="upload-input" />
            <h1>{user.name}</h1>
            <h2 className='user-type'>User</h2>
          </div>
        </div>

        <div id="bio-section" className="card white-card">
          <h1>Bio</h1>
          <p>{user.bio}</p>
        </div>
      </div>

      <div id="right-section" className="card grey-card">
        <h1>User Profile</h1>
        <h4>Full Name: <span className="details">{user.name}</span></h4>
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

      {/* Modal Popup */}
      <div className={`modal ${showModal ? 'show' : ''}`}>
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
          <div className="modal-actions">
            <button onClick={handleSave} className="save-button">Save</button>
            <button onClick={handleCancel} className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
