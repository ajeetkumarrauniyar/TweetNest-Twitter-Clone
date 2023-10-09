// Tweet Create Routes
// Importing necessary libraries and modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TweetModel = mongoose.model('TweetModel'); // Importing the Tweet model
const protectedRoute = require('../middleware/protectedResource'); // Importing the middleware for protecting routes

//Creating Tweet Route
router.post('/api/tweet', protectedRoute, async (req, res) => {

    // Extracting user data from the request body
    const {content, image} = req.body;

    // Checking if required fields are missing
    if (!content) {
        return res.status(400).json({ error: "One or more fields are empty" });
    }

    req.user.password = undefined; // Removing the password from the user object for security

    try {
        // Creating a new tweet with the TweetModel
        const newTweet = new TweetModel({
            content: content,
            image: image,
            tweetedBy: req.user._id
        });

        // Saving the new tweet to the database
        await newTweet.save();
        res.status(201).json({ result: "Tweet Created Successfully!" }); // Returns a 201 response with the newly created tweet
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the tweet!" });
    }
});

// Getting All Users Tweets Route
router.get('/api/tweet', async (req, res) => {
    try {
        // Retrieve all tweets from the database and populate the 'tweetedBy' field with user details
        const dbTweets = await TweetModel.find()
            .populate('tweetedBy', '_id fullName profilePicture');

        res.status(200).json({ tweets: dbTweets }); // Return the retrieved tweets as a JSON response
    } catch (error) {
        console.error(error); // Log any errors that occur during tweet retrieval
        res.status(500).json({ error: 'An error occurred while fetching tweets.' }); // Return an error message for server-side errors
    }
});

// Getting Logged In Users Tweets Route
router.get('/myalltweets', protectedRoute,async (req, res) => {
    try {
        // Retrieve all tweets from the database and populate the 'tweetedBy' field with user details
        const dbTweets = await TweetModel.find({tweetedBy: req.user._id})
            .populate('tweetedBy', '_id fullName profilePicture');

        res.status(200).json({ tweets: dbTweets }); // Return the retrieved tweets as a JSON response
    } catch (error) {
        console.error(error); // Log any errors that occur during tweet retrieval
        res.status(500).json({ error: 'An error occurred while fetching tweets.' }); // Return an error message for server-side errors
    }
});
// Exporting the Router
module.exports = router;