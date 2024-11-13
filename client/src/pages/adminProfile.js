import React, { useState } from 'react';
import './Adminprofile.css';

export default function Adminprofile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Obakeng Ndlovu',
    role: 'Admin',
    location: 'USA',
    contact: '0764465644',
    email: 'sarahhowl33@gmail.com',
    status: 'Active',
    profilePicture: 'https://via.placeholder.com/150' // Placeholder image URL
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="thewolepage">
      <div id="profileSection">
        <img src={profileData.profilePicture} alt="Profile" className="profile-picture" />

        <div className="grey-box">
          <h1>{profileData.name}</h1>
          <h2>{profileData.role} Profile</h2>
        </div>

        <button onClick={openModal} aria-label="Edit Profile">Edit Profile</button>
      </div>

      <div id="info">
        <div className="info-item white-box">
          <div class="title"><h3>Role</h3></div>
          <div class="valueTitle"><span>{profileData.role}</span></div>
        </div>
        <div className="info-item white-box">
          <div class="title"><h3>Location</h3></div>
          <div class="valueTitle"><span>{profileData.location}</span></div>
        </div>
        <div className="info-item white-box">
          <div class="title"><h3>Contact</h3></div>
          <div class="valueTitle"><span>{profileData.contact}</span></div>
        </div>
        <div className="info-item white-box">
          <div class="title"><h3>Email</h3></div>
         <div class="valueTitle"><span>{profileData.email}</span></div>
        </div>
        <div className="info-item white-box">
          <div class="title"><h3>Status</h3></div>
         <div class="valueTitle"><span>{profileData.status}</span></div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div className="modal-content">
            <h2 id="modalTitle">Edit Profile</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Role:
                <input
                  type="text"
                  name="role"
                  value={profileData.role}
                  onChange={handleChange}
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                />
              </label>
              <label>
                Contact:
                <input
                  type="text"
                  name="contact"
                  value={profileData.contact}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Status:
                <input
                  type="text"
                  name="status"
                  value={profileData.status}
                  onChange={handleChange}
                />
              </label>
              <div className="modal-buttons">
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={closeModal} aria-label="Cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
