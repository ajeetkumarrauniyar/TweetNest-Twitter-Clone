// Importing necessary libraries and modules 
const express = require('express');
const fileRouter = express.Router();
const protectedRoute  = require('../middleware/protectedResource');
const { uploadProfileImage, downloadFile } = require('../controllers/fileController');

// Upload user profile picture
fileRouter.post('/api/user/:id/uploadProfileImage', protectedRoute, uploadProfileImage);
// Download profile picture
// fileRouter.get('/api/user/:id/downloadProfileImage/:fileName', protectedRoute, downloadFile); // TODO:  NOT Need to download profile picture

// Exporting the Router
module.exports = fileRouter;