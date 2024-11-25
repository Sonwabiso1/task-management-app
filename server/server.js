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
  status: String,
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

// GET route to fetch a user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
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
    const { name } = req.query;
    const query = name ? { name } : {};
    const projects = await Project.find(query);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to create a new user (signup)
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password, organization, teamName, role } = req.body;
    
    const newUser = new User({
      name,
      email,
      password,
      organization,
      teamName,  // Store the team name
      role: role || 'user' // Default role if not specified
    });

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
    
    const newProject = new Project({
      name,
      description,
      createdBy,
      organization,
      status: 'active',
      members: [createdBy]
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

// PATCH route to update a task (for editing or changing status)
app.patch('/api/projects/:projectId/tasks/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST route to handle forgot password
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User with this email not found' });
    }

    // Generate a reset token (you might use a library like crypto or jwt)
    const resetToken = 'mock-reset-token'; // Replace with real token generation logic

    // Normally, you'd send this token via email to the user
    console.log(`Password reset token for ${email}: ${resetToken}`);

    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
