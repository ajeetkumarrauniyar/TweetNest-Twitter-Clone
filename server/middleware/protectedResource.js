// Import necessary libraries and modules
const jwt = require('jsonwebtoken'); // Import JWT for token verification
const config = require('../config/config'); // Import configuration settings, including JWT_SECRET
const mongoose = require('mongoose');
const UserModel = mongoose.model('UserModel'); // Importing the User model

// Middleware for protecting resources
module.exports = (req, res, next) => {
    const { authorization } = req.headers; //Extracts the "authorization" header from the request, which typically contains a JWT token.

    // console.log('Received Token:', authorization);

    // Check if the user is not logged in (no authorization token)
    if (!authorization) {
        return res.status(401).json({ error: "User not logged in" });
    }

    //Bearer hlcjhjlnvlnv
    // Extract the token (remove "Bearer" prefix)
    const token = authorization.replace("Bearer", "");

    // Verify the JWT token
    jwt.verify(token, config.JWT_SECRET, (error, payload) => {
        if (error) {
            console.error(error);
            return res.status(401).json({ error: "User not logged in" });
        }

        const { _id } = payload;

        // Find the user by their ID in the database
        UserModel.findById(_id, (error, dbUser) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while fetching user data" });
            }

            if (!dbUser) {
                return res.status(401).json({ error: "User not logged in" });
            }

            // Attach the user object to the request for use in subsequent middleware or routes
            req.user = dbUser;
            next(); // Continue to the next middleware or route
        });
    });
};