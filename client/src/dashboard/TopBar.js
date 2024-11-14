// TopBar.js
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="top-bar">
      <div>Project Name</div>
      <div className="user-icons">
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
}

export default TopBar;
