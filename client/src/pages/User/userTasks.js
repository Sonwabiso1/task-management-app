
// KanbanBoard.jsx
import React, { useState } from 'react';
import KanbanColumn from './KanbanBoardColumn';
import "../../styles/User/KanbanBoard.css"

const KanbanBoard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', description: 'Description of Task 1', status: 'To Do' },
        { id: 2, title: 'Task 2', description: 'Description of Task 2', status: 'In Progress' },
        { id: 3, title: 'Task 3', description: 'Description of Task 3', status: 'Completed' },
    ]);

    // Handle the start of dragging a task
    const handleDragStart = (e, task) => {
        e.dataTransfer.setData('task', JSON.stringify(task));
    };

    // Handle the drop event when dragging a task to a new column
    const handleDrop = (e, status) => {
        const taskData = JSON.parse(e.dataTransfer.getData('task'));
        taskData.status = status;  // Update task's status based on where it's dropped
        setTasks(tasks.map((task) => (task.id === taskData.id ? taskData : task)));
    };

    // Prevent the default behavior to allow dropping
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Helper function to get tasks by their status
    const getTasksByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    return (
        <div className="kanban-board">
            <KanbanColumn
                title="To Do"
                tasks={getTasksByStatus('To Do')}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            />
            <KanbanColumn
                title="In Progress"
                tasks={getTasksByStatus('In Progress')}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            />
            <KanbanColumn
                title="Completed"
                tasks={getTasksByStatus('Completed')}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            />
        </div>
    );
};

export default KanbanBoard;
