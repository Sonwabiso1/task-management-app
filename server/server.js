// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mongoose schema and model for the tasksCollection
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  status: Boolean,
});

const Task = mongoose.model('Task', taskSchema, 'tasksCollection');

// Connect to MongoDB Atlas with tasksDatabase
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'tasksDatabase'  // Specify the tasksDatabase here
})
.then(() => console.log('Connected to MongoDB Atlas - tasksDatabase'))
.catch((err) => console.error('MongoDB connection error:', err));

// GET route to fetch all tasks from tasksCollection
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
