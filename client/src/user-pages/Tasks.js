
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/admin/AdminTasks.css';

const ItemTypes = { TASK: 'task' };

const TaskCard = ({ task, onEdit }) => {
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
      onClick={() => onEdit(task)}
    >
      <p><strong>{task.title}</strong></p>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

const KanbanColumn = ({ title, tasks, status, onDrop, onEdit }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (draggedTask) => onDrop(draggedTask, status),
  }));

  return (
    <div ref={drop} className="kanban-column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onEdit={onEdit} />
      ))}
    </div>
  );
};

const Tasks = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: []
  });
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'Low', status: 'To Do' });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchProjectAndTasks = async () => {
      try {
        const projectResponse = await fetch(`http://localhost:5000/api/projects?name=${projectName}`);
        const projectData = await projectResponse.json();
        if (projectResponse.ok && projectData.length > 0) {
          const project = projectData[0];
          setProject(project);

          const tasksResponse = await fetch(`http://localhost:5000/api/projects/${project._id}/tasks`);
          const tasksData = await tasksResponse.json();
          if (tasksResponse.ok) {
            setTasks({
              todo: tasksData.filter((task) => task.status === 'To Do'),
              doing: tasksData.filter((task) => task.status === 'Doing'),
              done: tasksData.filter((task) => task.status === 'Done'),
            });
          }
        }
      } catch (error) {
        console.error('Error fetching project or tasks:', error);
      }
    };
    fetchProjectAndTasks();
  }, [projectName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

const handleAddOrEditTask = async () => {
  if (!newTask.title || !newTask.description) {
    alert('Please provide both a title and description.');
    return;
  }

  try {
    const url = editingTask
      ? `http://localhost:5000/api/projects/${project._id}/tasks/${editingTask._id}`
      : `http://localhost:5000/api/projects/${project._id}/tasks`;

    const method = editingTask ? 'PATCH' : 'POST';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();

    if (response.ok) {
      // Reset editing state only if the request was successful
      if (editingTask) {
        setTasks((prev) => ({
          ...prev,
          [editingTask.status.toLowerCase()]: prev[editingTask.status.toLowerCase()].map((task) =>
            task._id === editingTask._id ? { ...task, ...newTask } : task
          ),
        }));
      } else {
        setTasks((prev) => ({
          ...prev,
          [newTask.status.toLowerCase()]: [...prev[newTask.status.toLowerCase()], data.task],
        }));
      }
      setNewTask({ title: '', description: '', priority: 'Low', status: 'To Do' });
      setEditingTask(null);
    } else {
      console.error('Task operation failed:', data.error || 'Unknown error');
    }
  } catch (error) {
    console.error('Error saving task:', error);
  }
};


  const handleDrop = async (task, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${project._id}/tasks/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        setTasks((prev) => {
          const updatedPrev = {
            todo: prev.todo || [],
            doing: prev.doing || [],
            done: prev.done || []
          };
          updatedPrev[task.status.toLowerCase()] = updatedPrev[task.status.toLowerCase()].filter(
            (t) => t._id !== task._id
          );
          updatedPrev[newStatus.toLowerCase()] = [
            ...updatedPrev[newStatus.toLowerCase()],
            { ...task, status: newStatus }
          ];
          return updatedPrev;
        });
      } else {
        console.error("Error updating task status:", await response.text());
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTask({ title: task.title, description: task.description, priority: task.priority, status: task.status });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="admin-tasks">
        <h1>{project ? project.name : 'Loading...'}</h1>
        <div className="kanban-board">
          <KanbanColumn
            title="To Do"
            tasks={tasks.todo || []}
            status="To Do"
            onDrop={handleDrop}
            onEdit={handleEditTask}
          />
          <KanbanColumn
            title="Doing"
            tasks={tasks.doing || []}
            status="Doing"
            onDrop={handleDrop}
            onEdit={handleEditTask}
          />
          <KanbanColumn
            title="Done"
            tasks={tasks.done || []}
            status="Done"
            onDrop={handleDrop}
            onEdit={handleEditTask}
          />
        </div>
        <div className="add-task">
          <h2>{editingTask ? 'Edit Task' : 'Add Task'}</h2>
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
          <select name="status" value={newTask.status} onChange={handleInputChange}>
            <option value="To Do">To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={handleAddOrEditTask}>
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default Tasks;
