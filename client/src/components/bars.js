import React from 'react';
import './bars.css';
import {Link} from 'react-router-dom'

export default function Bars() {
    return (
        <div id="mainDiv">
            <div id="sidebar">
                <h1>🏠 Home</h1>
                <br />
                <Link to="./pages/Project"><h1>📁 Projects</h1></Link>
                <br />
                <Link to="./pages/notification"><h1>🔔 Notifications</h1></Link> 
            </div>

            <div id="navbar">
                <h1>LOGO</h1>
                <select id="project-dropdown">
                    <option>Project Name</option>
                    <option>Project A</option>
                    <option>Project B</option>
                </select>
                <h1>🔔🔴</h1>
            </div>
        </div>
    );
}
