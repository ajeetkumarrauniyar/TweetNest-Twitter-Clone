// Tweet Create Routes
// Importing necessary libraries and modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TweetModel = mongoose.model('TweetModel'); // Importing the Tweet model
const config = require('../config/config'); // Importing configuration settings
const protectedRoute = require('../middleware/protectedResource'); // Importing the middleware for protecting routes

//Creating Tweet Route
router.post('/createtweet', protectedRoute, async (req, res) => {

    // Extracting user data from the request body
    const { content, image, tweetedBy } = req.body;

    // Checking if required fields are missing
    if (!content || !tweetedBy) {
        return res.status(400).json({ error: "One or more fields are empty" });
    }

    req.user.password = undefined; // Removing the password from the user object for security

    try {
        // Creating a new tweet with the TweetModel
        const newTweet = new TweetModel({
            content: content,
            image: image,
            tweetedBy: req.user
        });

        // Saving the new tweet to the database
        await newTweet.save();
        res.status(201).json({ result: "Tweet Created Successfully!" }); // Returns a 201 response with the newly created tweet
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the tweet!" });
    }

    // Create a new tweet with the TweetModel
    //    const newTweet = new TweetModel({
    //     content: content,
    //     image: image,
    //     tweetedBy: req.user
    // });

    // newTweet.save()
    // .then((newTweet)=>{
    //     res.status(201).json({post : newTweet}); 
    // })
    // .catch((error) =>{
    //     console.log(error); // Logs any errors that occur during tweet creation
    // })
});

// Exporting the Router
module.exports = router;