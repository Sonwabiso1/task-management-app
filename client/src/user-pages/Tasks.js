import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/admin/AdminTasks.css';

const ItemTypes = { TASK: 'task' };

const TaskCard = ({ task, moveTask }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TASK,
        item: task,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className="task-card"
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            <p>{task.title}</p>
        </div>
    );
};

const KanbanColumn = ({ title, tasks, status, onDrop }) => {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.TASK,
        drop: (draggedTask) => onDrop(draggedTask, status),
    }));

    return (
        <div ref={drop} className="kanban-column">
            <h2>{title}</h2>
            {tasks.map((task) => (
                <TaskCard key={task._id} task={task} />
            ))}
        </div>
    );
};

const Tasks = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState({ todo: [], doing: [], done: [] });
    const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'Low' });

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/projects/${projectId}`);
                const data = await response.json();
                setProject(data);

                const tasksResponse = await fetch(`http://localhost:5000/api/projects/${projectId}/tasks`);
                const tasksData = await tasksResponse.json();
                if (tasksResponse.ok) {
                    setTasks({
                        todo: tasksData.filter((task) => task.status === 'To Do'),
                        doing: tasksData.filter((task) => task.status === 'Doing'),
                        done: tasksData.filter((task) => task.status === 'Done'),
                    });
                }
            } catch (error) {
                console.error('Error fetching project or tasks:', error);
            }
        };
        fetchProject();
    }, [projectId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddTask = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/projects/${projectId}/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
            const data = await response.json();
            if (response.ok) {
                setTasks((prev) => ({
                    ...prev,
                    todo: [...prev.todo, data.task],
                }));
                setNewTask({ title: '', description: '', priority: 'Low' });
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const handleDrop = async (task, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/api/projects/${projectId}/tasks/${task._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });
            if (response.ok) {
                setTasks((prev) => ({
                    ...prev,
                    [task.status.toLowerCase()]: prev[task.status.toLowerCase()].filter(
                        (t) => t._id !== task._id
                    ),
                    [newStatus.toLowerCase()]: [...prev[newStatus.toLowerCase()], { ...task, status: newStatus }],
                }));
            }
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="admin-tasks">
                <h1>{project ? project.name : 'Loading...'}</h1>
                <div className="kanban-board">
                    <KanbanColumn title="To Do" tasks={tasks.todo} status="To Do" onDrop={handleDrop} />
                    <KanbanColumn title="Doing" tasks={tasks.doing} status="Doing" onDrop={handleDrop} />
                    <KanbanColumn title="Done" tasks={tasks.done} status="Done" onDrop={handleDrop} />
                </div>
                <div className="add-task">
                    <h2>Add Task</h2>
                    <input
                        type="text"
                        name="title"
                        value={newTask.title}
                        onChange={handleInputChange}
                        placeholder="Task Title"
                    />
                    <textarea
                        name="description"
                        value={newTask.description}
                        onChange={handleInputChange}
                        placeholder="Task Description"
                    />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
            </div>
        </DndProvider>
    );
};

export default Tasks;