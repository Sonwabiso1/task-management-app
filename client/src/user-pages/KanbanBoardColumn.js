// KanbanColumn.jsx
import React from 'react';
import TaskCard from './TaskCard';

const KanbanColumn = ({ title, tasks, onDragStart, onDrop, onDragOver }) => {
    return (
        <div
            className="kanban-column"
            onDrop={(e) => onDrop(e, title)}
            onDragOver={onDragOver}
        >
            <h3>{title}</h3>
            <div className="task-list">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} onDragStart={onDragStart} />
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;
