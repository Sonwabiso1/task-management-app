import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const NavbarLayout = () => (
  <div className="app-container">
    <Navbar />
    <div className="content">
      <Outlet /> {/* Nested routes are rendered here */}
    </div>
  </div>
);

export default NavbarLayout;
