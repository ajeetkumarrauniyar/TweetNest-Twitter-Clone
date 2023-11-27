// User-related routes (user details, Follow, unFollow, etc.)
// Importing necessary libraries and modules 
const express = require('express');
const userRouter = express.Router();
const { getUser, updateUserDetails, deleteUser, followUser, unFollowUser, userAllTweets } = require('../controllers/userController');
const { verifyToken } = require('../middleware/verifyToken');

userRouter.get('/api/user/:id', getUser) // Find a user
userRouter.put('/api/user/:id', verifyToken, updateUserDetails) // Update user details
// userRouter.delete('/api/user/:id', verifyToken, deleteUser) // Delete user details

userRouter.put('/api/user/:id/follow', followUser) // Follow user
userRouter.put('/api/user/:id/unfollow', unFollowUser) // Unfollow user

// userRouter.post('/api/user/:id/tweets', userAllTweets) // Get User Tweets


// Exporting the Router
module.exports = userRouter;
