// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // Only if using MongoDB
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection (MongoDB example)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Task Management API');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
