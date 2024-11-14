import React, { useState } from 'react';
import '../styles/Admin/adminTasks.css';

export default function TaskModal({ onClose, onSave }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        priority: 'Low',
        assignedTo: '',
        dueDate: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSave = () => {
        // Validation: Check if any required field is missing
        if (!form.title || !form.description || !form.assignedTo || !form.dueDate) {
            setError('Please fill in all required fields.');
            return; // Prevent form submission if validation fails
        }

        onSave(form); // Pass the form data back to Dashboard
        sendNotification(form.assignedTo, form.title); // Notify the assigned person
        onClose(); // Close the modal after saving
    };

    const sendNotification = (assignedTo, taskTitle) => {
        // Mock function to simulate sending a notification
        alert(`Notification sent to ${assignedTo} for task: ${taskTitle}`);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add New Task</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    {error && <p className="error-message">{error}</p>}
                    <label>
                        Title of Task:
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Priority:
                        <select
                            name="priority"
                            value={form.priority}
                            onChange={handleChange}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </label>
                    <label>
                        Assigned To:
                        <input
                            type="text"
                            name="assignedTo"
                            value={form.assignedTo}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Due Date:
                        <input
                            type="date"
                            name="dueDate"
                            value={form.dueDate}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="button" onClick={handleSave}>Save</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}
