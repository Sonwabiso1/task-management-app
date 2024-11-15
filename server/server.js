// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from localhost:3000

// Connect to MongoDB Atlas with taskManagementDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'taskManagementDB'  // Specify the taskManagementDB here
})
.then(() => console.log('Connected to MongoDB Atlas - taskManagementDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose schemas and models for each collection

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  status: Boolean,
  assignedTo: mongoose.Schema.Types.ObjectId, // Reference to User
  createdBy: mongoose.Schema.Types.ObjectId,  // Reference to User
  projectId: mongoose.Schema.Types.ObjectId,  // Reference to Project
  dueDate: Date,
}, { collection: 'tasks' });
const Task = mongoose.model('Task', taskSchema);

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  organization: String,
  teamName: String,  // New field
  role: { type: String, enum: ['student', 'team lead', 'user'] },  // Adjusted to include new roles
}, { collection: 'users' });
const User = mongoose.model('User', userSchema);

// Notification Schema
const notificationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId, // Reference to User
  message: String,
  type: String, // "task", "project", "system"
  read: Boolean,
}, { collection: 'notifications' });
const Notification = mongoose.model('Notification', notificationSchema);

// Project Schema
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy: mongoose.Schema.Types.ObjectId,  // Reference to User
  organization: String,
  members: [mongoose.Schema.Types.ObjectId], // Array of User references
  status: String,
}, { collection: 'projects' });
const Project = mongoose.model('Project', projectSchema);

// Routes to fetch data

// GET route to fetch all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all notifications
app.get('/api/notifications', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to create a new user (signup)
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password, organization, teamName, role } = req.body;
    
    // Create a new user with the data received in the request body
    const newUser = new User({
      name,
      email,
      password,
      organization,
      teamName,  // Store the team name
      role: role || 'user' // Default role if not specified
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route for user login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      // You can choose to send selective user details if needed
      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          organization: user.organization,
          role: user.role,
        },
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// POST route to create a new project
app.post('/api/projects', async (req, res) => {
  try {
    const { name, description, createdBy, organization } = req.body;
    
    // Create new project
    const newProject = new Project({
      name,
      description,
      createdBy, // Assumes `createdBy` is passed in the request, referencing the user ID
      organization,
      status: 'active', // Default status
      members: [createdBy] // Adds the creator as the first member
    });

    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch tasks for a specific project
app.get('/api/projects/:projectId/tasks', async (req, res) => {
    try {
        const { projectId } = req.params;
        const tasks = await Task.find({ projectId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to add a new task to a specific project
app.post('/api/projects/:projectId/tasks', async (req, res) => {
    try {
        const { projectId } = req.params;
        const { title, description, priority } = req.body;

        const newTask = new Task({
            title,
            description,
            priority,
            status: 'To Do',
            projectId,
        });

        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));