import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/User/userTasks.css';

export default function UserTasks() {
  const { projectId } = useParams();  // Get projectId from URL params
  const [tasks, setTasks] = useState([]);  // State to hold tasks data

  // Fetch tasks from the server based on project ID
  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${projectId}/tasks`)
      .then(response => response.json())
      .then(data => {
        // Sort tasks by priority before setting state
        const sortedTasks = data.sort((a, b) => {
          const priorityLevels = { "High": 1, "Medium": 2, "Low": 3 };
          return (priorityLevels[a.priority] || 3) - (priorityLevels[b.priority] || 3);
        });
        setTasks(sortedTasks);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, [projectId]);

  // Filter tasks by status
  const toDoTasks = tasks.filter(task => task.status === 'To do');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const doneTasks = tasks.filter(task => task.status === 'Done');

  return (
    <div className="board">
      <div className="column">
        <div className="header todo">To do</div>
        {toDoTasks.map(task => (
          <div className="box" key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <h5>Date due: {new Date(task.dueDate).toLocaleDateString()}</h5>
          </div>
        ))}
      </div>

      <div className="column">
        <div className="header in-progress">In Progress</div>
        {inProgressTasks.map(task => (
          <div className="box" key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <h5>Date due: {new Date(task.dueDate).toLocaleDateString()}</h5>
          </div>
        ))}
      </div>

      <div className="column">
        <div className="header done">Done</div>
        {doneTasks.map(task => (
          <div className="box" key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <h5>Date due: {new Date(task.dueDate).toLocaleDateString()}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
