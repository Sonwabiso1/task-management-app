import React from 'react';
import './bars.css';
import { Link } from 'react-router-dom';

export default function Bars({ toggleSidebar, showSidebar }) {
    return (
        <div>
            <div id="navbar">
                <h1>LOGO</h1>
                <select id="project-dropdown">
                    <option>Project Name</option>
                    <option>Project A</option>
                    <option>Project B</option>
                </select>
                <button onClick={toggleSidebar} className="toggle-btn">
                    {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>
                <h1>🔔🔴</h1>
            </div>
            {showSidebar && (
                <div id="sidebar">
                    <Link to="/"><h1>🏠 Home</h1></Link>
                    <Link to="/projects"><h1>📁 Projects</h1></Link>
                    <Link to="/notification"><h1>🔔 Notifications</h1></Link>
                </div>
            )}
        </div>
    );
}
