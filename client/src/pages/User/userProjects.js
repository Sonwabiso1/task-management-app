import React from "react";
import { Link } from 'react-router-dom';
import './../../styles/User/userProjects.css';

export default function Projects() {
    const projectData = [
        { id: 1, name: 'Project 1', description: 'Description for Project 1' },
        { id: 2, name: 'Project 2', description: 'Description for Project 2' },
        { id: 3, name: 'Project 3', description: 'Description for Project 3' },
        { id: 4, name: 'Project 4', description: 'Description for Project 4' }
    ];

    return (
        <>
            <h1>Projects:</h1>
            <section id="proj-Widgets">
                {projectData.map(project => (
                    <div id="widget" key={project.id}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Link to={`/tasks/${project.id}`}>
                            <button>View Project</button>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
}
