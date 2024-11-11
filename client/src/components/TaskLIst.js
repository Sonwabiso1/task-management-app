// TaskList.js
import React, { useEffect, useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);  // State to hold tasks data

  // Fetch tasks from the server
  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')  // Adjust this URL if needed
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Status:</strong> {task.status ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
