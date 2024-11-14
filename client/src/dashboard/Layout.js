// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
// import './Dashboard.css'; // Optional styling

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
};

export default Layout;
