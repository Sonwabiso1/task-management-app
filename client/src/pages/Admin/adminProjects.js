// Projects.js
import React from 'react';
//import '../../styles/Admin/adminProjects.css';

export default function AdminProjects() {
    return (
        <div className="projects-container">
            <h2>Projects:</h2>
            <div className="projects-grid">
                {[1, 2, 3, 4].map((project) => (
                    <div className="project-card" key={project}>
                        <div className="project-icon">📄</div>
                        <h3>Project Title</h3>
                        <p>Project description goes here. Briefly describe the project in a few sentences.</p>
                        <button className="view-project-btn">View Project</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
