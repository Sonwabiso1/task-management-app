import React from 'react';
import './bars.css';
import { Link } from 'react-router-dom';

export default function Bars({ toggleSidebar, showSidebar }) {
    return (
        <div>
            <div id="navbar">
                <select id="project-dropdown">
                    <option>Project Name</option>
                    <option>Project A</option>
                    <option>Project B</option>
                </select>
                {/* <button onClick={toggleSidebar} className="toggle-btn">
                    {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>
                <h1>🔔🔴</h1> */}
            </div>
            {showSidebar && (
                <div id="sidebar">
                      <img src="TaskDash (2).png"alt="logo" className="logo" width="100" height="100"/>
                    <Link to="/"><h1>🏠 Home</h1></Link>
                    <Link to="/projects"><h1>📁 Projects</h1></Link>
                    <Link to="/notification"><h1>🔔 Notifications</h1></Link>
                    <Link to="/about"><h1>📝About</h1></Link>
                    <Link to="/tasks"><h1>🔎Tasks</h1></Link>
                    <Link to="/memberlogin"><h1>🙂MemberLog</h1></Link>
                    <Link to="/userprofile"><h1>😎Userprofile</h1> </Link>
                    <Link to="/adminprofile"><h1>😒Adminprofile</h1></Link>
                </div>
            )}
        </div>
    );
}
