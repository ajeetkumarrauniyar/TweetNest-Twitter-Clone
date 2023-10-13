// Importing necessary libraries and modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Library for interacting with MongoDB database
const config = require('./config/config');  // Importing configuration settings

// Creating an Express application
const app = express();

// Setting up CORS middleware to handle cross-origin requests
app.use(cors());

// Parsing incoming JSON requests
app.use(express.json());

// Including the user model schema and the Tweet model schema
require('./models/user_model');
require('./models/tweet_model');

// Including the authorization routes (register and login)
app.use(require('./routes/auth_routes'));

// Including the user related routes, Tweet routes, File routes
// app.use(require('./routes/user_routes'));
app.use(require('./routes/tweet_routes'));
app.use(require('./routes/file_upload_routes'));

// Setting up the server port, default to 5000, using the configuration settings
const port = config.port;

// Connecting to the MongoDB database using the MONGODB_URL from the configuration settings
mongoose.connect(config.databaseURL);

mongoose.connection.on('connected', () => {
    // Retrieving the name of the database to which the connection has been established.
    const dbName = mongoose.connection.db.databaseName;
    console.log(`Connected to the database: ${dbName}`);
});

mongoose.connection.on('error', (error) => {
    console.error('Error on connection:', error); // Logs any errors that occur during the database connection
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});