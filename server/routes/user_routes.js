// User-related routes (user details, follow, unfollow, etc.)
// Importing necessary libraries and modules 
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const UserModel = mongoose.model('UserModel'); // Importing the User model

router.get ('/', (req, res) => {
    res.send("User Route Get Started");
})

// Exporting the Router
module.exports = router;
