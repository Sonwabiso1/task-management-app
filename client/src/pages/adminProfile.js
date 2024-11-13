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

  // Open Modal
  const openModal = () => setIsModalOpen(true);

  // Close Modal
  const closeModal = () => setIsModalOpen(false);

  // Handle Profile Data Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Save Changes
  const handleSave = () => {
    // Add saving logic here if needed (e.g., API call)
    setIsModalOpen(false);
  };

  return (
    <>
      <div id="profileSection">
        <img src={profileData.profilePicture} alt="Profile" className="profile-picture" />
        <h1>{profileData.name}</h1>
        <h2>{profileData.role} Profile</h2>
        <button onClick={openModal} aria-label="Edit Profile">Edit Profile</button>
      </div>
      <div id="info">
        <div className="info-item">
          <h3>Role</h3>
          <span>{profileData.role}</span>
        </div>
        <div className="info-item">
          <h3>Location</h3>
          <span>{profileData.location}</span>
        </div>
        <div className="info-item">
          <h3>Contact</h3>
          <span>{profileData.contact}</span>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <span>{profileData.email}</span>
        </div>
        <div className="info-item">
          <h3>Status</h3>
          <span>{profileData.status}</span>
        </div>
      </div>

      {/* Modal */}
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
    </>
  );
}
