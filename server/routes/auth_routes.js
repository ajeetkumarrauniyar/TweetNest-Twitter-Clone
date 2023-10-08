// Authentication-related routes (register, login)
// Importing necessary libraries and modules 
const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user_model'); // Importing the User model
const bcryptjs = require('bcryptjs'); // Importing bcryptjs for password hashing
const jwt = require('jsonwebtoken'); // Importing JWT for token generation
const config = require('../config/config'); // Importing configuration settings

// Signup Route
router.post("/signup", async (req, res) => {
    // Extract user data from the request body
    const { fullName, username, email, password, profilePicture } = req.body;

    try {
        // Checking if required fields are missing
        if (!fullName || !username || !email || !password) {
            return res.status(400).json({ error: "One or more fields are empty" });
        }

        // Checking if the email already exists in the database
        const userExists = await userModel.findOne({ email: email });
        if (userExists) {
            return res.status(409).json({ error: "E-mail ID already exists." }); // 409 for e-mail conflicts
        }

        // Hashing the password
        const hashedPassword = await bcryptjs.hash(password, 16); 
        
        // Creating a new user with the TweetModel
        const newUser = new userModel({
            fullName,
            username,
            email,
            password: hashedPassword,
            profilePicture
        });

        // Saving the new user to the database
        await newUser.save();
        res.status(201).json({ result: "User Signed up Successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during user registration!!" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    // Extract email and password from the request body
    const {email, password} = req.body;

    try {
        // Checking if required fields are missing
        if (!email || !password) {
            return res.status(400).json({ error: "One or more fields are empty" });
        }

        // Checking if the email exists in the database
        const userExists = await userModel.findOne({ email: email });
        if (!userExists) {
            return res.status(401).json({ error: "Invalid Credentials" }); 
        }

        // Comparing the password with the hashed password stored in the database
        const passwordMatch= await bcryptjs.compare(password, userExists.password); 
        
        // Checking if the password provided by the user matches the hashed password stored in the database
        if (passwordMatch) {
            // Creating a JWT token with user information
            const jwtToken = jwt.sign({_id: userExists._id}, config.JWT_SECRET);
            const userInfo = {"email": userExists.email, "fullName": userExists.fullName};

            return res.status(200).json({ result: {token: jwtToken, user: userInfo} });
        } else {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during login!" });
    }
});

// Exporting the Router
module.exports = router;
