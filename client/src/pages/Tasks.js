import React from "react";
import './Tasks.css';

export default function Tasks() {
    return (
        <div id="mainDiv">
            <div id="sidebar">
                <h1>🏠 Home</h1>
                <br/>
                <h1>📁 Projects</h1>
                <br/>
                <h1>🔔 Notifications</h1>
            </div>
            <div>
                <div id="navbar">
                    <h1>LOGO</h1>
                    <select id="project-dropdown">
                        <option>Project Name</option>
                        <option>Project A</option>
                        <option>Project B</option>
                    </select>
                    <h1>🔔🔴</h1>
                </div>
                <div id="content">
                    <h2>Main Content</h2>
                    <p>Here is the main content area. You can add your components and content here.</p>
                </div>
            </div>
        </div>
    );
}
