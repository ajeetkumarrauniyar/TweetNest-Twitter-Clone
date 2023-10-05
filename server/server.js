 // Importing necessary libraries and modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Library for interacting with MongoDB database
const config = require('./config'); // Importing configuration settings

// Creating an Express application
const app = express();

// Setting up CORS middleware
app.use(cors());

// Parsing incoming JSON requests
app.use(express.json());

// Including the user model schema and user routes
require('./models/user_model');
app.use(require('./routes/user_route'));

// Setting up the server port, default to 5000, using the configuration settings
const port =config.port;

// Connecting to the MongoDB database using the MONGODB_URL from the configuration settings
mongoose.connect(config.databaseURL);

mongoose.connection.on('connected', () => {
    // Retrieve the name of the database to which the connection has been established.
    const dbName = mongoose.connection.db.databaseName;
    console.log(`Connected to the database: ${dbName}`);
});

mongoose.connection.on('error', (error) => {
    console.error('Error on connection:', error);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});