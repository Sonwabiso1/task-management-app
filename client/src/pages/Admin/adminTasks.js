// Dashboard.js
import React, { useState } from 'react';
import TaskModal from '../../components/TaskModal'; // Import the TaskModal component
import '../../styles/Admin/adminTasks.css';



export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                        <div className="task-card">+</div>
                    </div>
                    <div className="column in-progress">
                        <h3>In Progress</h3>
                        <div className="task-card">+</div>
                    </div>
                    <div className="column done">
                        <h3>Done</h3>
                        <div className="task-card">+</div>
                    </div>
                </div>
            </main>

            {isModalOpen && <TaskModal onClose={closeModal} />} {/* Render TaskModal when open */}
        </div>
    );
}
