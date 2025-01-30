const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

require('./models/model')
app.use(express.json())
app.use(require("./routes/auth"))
// Import MongoDB URL
const mongoUrl = require('./keys');

// Connect to MongoDB
mongoose.connect(mongoUrl);

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose successfully connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Start Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
