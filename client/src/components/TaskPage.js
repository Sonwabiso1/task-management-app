// TaskPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Admin/adminTasks.css';

const projectData = {
    1: { title: 'Project 1', tasks: ['Task 1', 'Task 2'] },
    2: { title: 'Project 2', tasks: ['Task A', 'Task B'] },
    3: { title: 'Project 3', tasks: ['Task X', 'Task Y'] },
    4: { title: 'Project 4', tasks: ['Task Alpha', 'Task Beta'] }
};

export default function TaskPage() {
    const { projectId } = useParams();
    const project = projectData[projectId];

    if (!project) return <p>Project not found</p>;

    return (
        <div className="task-page">
            <h2>{project.title}</h2>
            <div className="task-list">
                {project.tasks.map((task, index) => (
                    <div className="task-item" key={index}>
                        <p>{task}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
