import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/admin/AdminProjects.css'; // Assuming you already have styles in place

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        if (response.ok) {
          setProjects(data);
        } else {
          console.error('Failed to fetch projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateProject = async () => {
    if (!newProject.name || !newProject.description) {
      alert('Please provide both a project name and description.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      const data = await response.json();
      if (response.ok) {
        setProjects((prev) => [...prev, data.project]);
        setNewProject({ name: '', description: '' });
      } else {
        console.error('Project creation failed:', data.error);
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleProjectClick = (project) => navigate(`/projects/${id}/${project.name}/tasks`);

  return (
    <div className="admin-projects">
      <div className="project-header">
        <h1>Projects</h1>
      </div>

      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project) => (
            <div
              className="project-item"
              key={project._id}
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              {/* <span className="project-status">Status: Active</span> */}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-projects">No projects available. Add a new project.</p>
      )}

      <div className="add-project-form">
        <h2>Add New Project</h2>
        <input
          type="text"
          name="name"
          value={newProject.name}
          onChange={handleInputChange}
          placeholder="Project Name"
          className="form-input"
        />
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          placeholder="Project Description"
          className="form-textarea"
        />
        <button className="add-project-btn" onClick={handleCreateProject}>
          Create Project
        </button>
      </div>
    </div>
  );
}