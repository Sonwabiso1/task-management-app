// TaskCard.jsx
import React from 'react';

const TaskCard = ({ task, onDragStart }) => {
    return (
        <div
            className="task-card"
            draggable
            onDragStart={(e) => onDragStart(e, task)}
        >
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;