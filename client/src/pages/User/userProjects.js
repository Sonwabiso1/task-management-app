import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/User/userProjects.css';

const projects = [
  { id: 1, name: 'Project 1', description: 'Info about Project 1' },
  { id: 2, name: 'Project 2', description: 'Info about Project 2' },
  // Add additional projects as needed
];

export default function UserProjects() {
  const navigate = useNavigate();

  const handleViewProject = (projectId) => {
    // Navigate to the task page for the selected project
    navigate(`/projects/${projectId}/tasks`);
  };

  return (
    <>
      <h1>Projects:</h1>
      <section id="proj-Widgets">
        {projects.map((project) => (
          <div key={project.id} className="widget">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button onClick={() => handleViewProject(project.id)}>View Project</button>
          </div>
        ))}
      </section>
    </>
  );
}
