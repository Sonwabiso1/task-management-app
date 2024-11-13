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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSave = () => {
        onSave(form); // Pass the form data back to Dashboard
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add New Task</h2>
                <form>
                    <label>
                        Title of Task:
                        <input type="text" name="title" value={form.title} onChange={handleChange} />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={form.description} onChange={handleChange} />
                    </label>
                    <label>
                        Priority:
                        <select name="priority" value={form.priority} onChange={handleChange}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </label>
                    <label>
                        Assigned To:
                        <input type="text" name="assignedTo" value={form.assignedTo} onChange={handleChange} />
                    </label>
                    <label>
                        Due Date:
                        <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
                    </label>
                    <button type="button" onClick={handleSave}>Save</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}
