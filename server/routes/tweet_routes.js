// Tweet Create, Get All Tweets, Get User Tweets Routes
// Importing necessary libraries and modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TweetModel = mongoose.model('TweetModel'); // Importing the Tweet model
const protectedRoute = require('../middleware/protectedResource'); // Importing the middleware for protecting routes

//Creating Tweet Route
router.post('/api/tweet', protectedRoute, async (req, res) => {

    // Extracting user data from the request body
    const { content, image } = req.body;

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
router.get('/api/tweet', protectedRoute, async (req, res) => {
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

// Retrieving Logged In User's Tweets Route
router.get('/api/tweet/:id', protectedRoute, async (req, res) => {
    try {
        // Retrieving all tweets from the database and populate the 'tweetedBy' field with user details
        const dbTweets = await TweetModel.find({ tweetedBy: req.user._id })
            .populate('tweetedBy', '_id fullName profilePicture');
        res.status(200).json({ tweets: dbTweets }); 
    } catch (error) {
        console.error(error); // Log any errors that occur during tweet retrieval
        res.status(500).json({ error: 'An error occurred while fetching tweets.' }); // Return an error message for server-side errors
    }
    // TweetModel.find({ tweetedBy: req.user._id })
    //     .populate("tweetedBy", "_id fullName profileImg")
    //     .then((dbPosts) => {
    //         res.status(200).json({ posts: dbPosts })
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
});

// Deleting a Tweet (Logged In User's Tweet) Route
router.delete('/api/tweet/:id', protectedRoute, async (req, res) => {
    const tweetId = req.params.id; // Extracting the tweet's unique identifier from the URL

    try {
        // Finding the tweet by its ID and populate 'tweetedBy' to access author information
        const tweet = await TweetModel.findOne({ _id: tweetId }).populate("tweetedBy", "_id");

        // Checking if the tweet exists
        if (!tweet) {
            return res.status(400).json({ error: "Tweet does not exist" });
        }

        // Checking if the logged-in user is the author of the tweet before allowing deletion
        if (tweet.tweetedBy._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "You don't have permission to delete this tweet" });
        }

        // Removing the tweet from the database
        await tweet.deleteOne();
        res.status(200).json({ message: "Tweet deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the tweet" });
    }
});

// Exporting the Router
module.exports = router;