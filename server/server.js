// Importing necessary libraries and modules
const express = require('express');
const dotenv = require('dotenv').config(); // Loading environment variables from .env file
const dbConnect = require("./config/dbConfig");

const cors = require("cors"); // Enable Cross-Origin Resource Sharing

// Creating an Express application
const app = express();

// Setting up the server port, default to 4000
const PORT = process.env.PORT || 4000;

// Connecting to the database
dbConnect();

// Body parsing middleware of incoming JSON requests
app.use(express.json()); 

// Setting up CORS middleware to handle cross-origin requests
app.use(cors());

// Including the models
require('./models/user_model'); // User model
require('./models/tweet_model');  // Tweet model

//Including the routes
app.use(require('./routes/auth_routes')); // authorization routes (register and login)
app.use(require('./routes/user_routes')); // User routes
app.use(require('./routes/tweet_routes')); // Tweet routes
app.use(require('./routes/file_upload_routes')); // File routes

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});