import React, { useState } from 'react';
import TaskModal from '../../components/TaskModal'; // Import the TaskModal component
import '../../styles/Admin/adminTasks.css';

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [tasks, setTasks] = useState([]); // State to store tasks

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        closeModal(); // Close modal after saving the task
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Logo</h2>
                <nav>
                    <a href="#">🏠 Home</a>
                    <a href="#" onClick={openModal}>📁 Projects</a> {/* Button to open the modal */}
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
                        {tasks.map((task, index) => (
                            <div className="task-card" key={index}>
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                                <p>Priority: {task.priority}</p>
                                <p>Assigned to: {task.assignedTo}</p>
                                <p>Due: {task.dueDate}</p>
                            </div>
                        ))}
                    </div>
                    <div className="column in-progress">
                        <h3>In Progress</h3>
                        {/* In-progress tasks can be added later */}
                    </div>
                    <div className="column done">
                        <h3>Done</h3>
                        {/* Completed tasks can be added later */}
                    </div>
                </div>
            </main>

            {isModalOpen && <TaskModal onSave={handleSaveTask} onClose={closeModal} />} {/* Render TaskModal when open */}
        </div>
    );
}
