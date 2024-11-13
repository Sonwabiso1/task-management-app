import React, { useState } from 'react';
import TaskModal from '../../components/TaskModal'; // Import the TaskModal component
import '../../styles/Admin/adminTasks.css'; // Correct relative path





export default function Admintasks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]); // State to store tasks

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveTask = (newTask) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { ...newTask, status: 'To do' } // Assign initial status as "To do"
        ]);
        closeModal(); // Close modal after saving the task
    };

    const updateTaskStatus = (index, newStatus) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, status: newStatus } : task
            )
        );
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Logo</h2>
                <nav>
                    <a href="#">🏠 Home</a>
                    <a href="#" onClick={openModal}>📁 Projects</a>
                    <a href="#">🔔 Notifications</a>
                </nav>
                <button className="logout-btn">Logout</button>
            </aside>

            <main className="board">
                <div className="board-header">
                    <h2>Project Name ▼</h2>
                </div>
                <div className="columns">
                    <div className="column to-do">
                        <h3>To do</h3>
                        {tasks.filter(task => task.status === 'To do').map((task, index) => (
                            <div className="task-card" key={index}>
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                                <p>Priority: {task.priority}</p>
                                <p>Assigned to: {task.assignedTo}</p>
                                <p>Due: {task.dueDate}</p>
                                <button onClick={() => updateTaskStatus(index, 'In Progress')}>Move to In Progress</button>
                                <button onClick={() => updateTaskStatus(index, 'Done')}>Move to Done</button>
                            </div>
                        ))}
                    </div>
                    <div className="column in-progress">
                        <h3>In Progress</h3>
                        {tasks.filter(task => task.status === 'In Progress').map((task, index) => (
                            <div className="task-card" key={index}>
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                                <p>Priority: {task.priority}</p>
                                <p>Assigned to: {task.assignedTo}</p>
                                <p>Due: {task.dueDate}</p>
                                <button onClick={() => updateTaskStatus(index, 'To do')}>Move to To Do</button>
                                <button onClick={() => updateTaskStatus(index, 'Done')}>Move to Done</button>
                            </div>
                        ))}
                    </div>
                    <div className="column done">
                        <h3>Done</h3>
                        {tasks.filter(task => task.status === 'Done').map((task, index) => (
                            <div className="task-card" key={index}>
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                                <p>Priority: {task.priority}</p>
                                <p>Assigned to: {task.assignedTo}</p>
                                <p>Due: {task.dueDate}</p>
                                <button onClick={() => updateTaskStatus(index, 'To do')}>Move to To Do</button>
                                <button onClick={() => updateTaskStatus(index, 'In Progress')}>Move to In Progress</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {isModalOpen && <TaskModal onSave={handleSaveTask} onClose={closeModal} />} {/* Render TaskModal when open */}
        </div>
    );
}
