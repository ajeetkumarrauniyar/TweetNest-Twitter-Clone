// Importing Mongoose library for schema and model creation
const mongoose = require('mongoose');

// Defining the User schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true, // Name is a required field
    },
    username: {
        type: String,
        required: true,
        unique: true, // Username must be unique
    },
    email: {
        type: String,
        required: true,
        unique: true, // Email must be unique
    },
    password: {
        type: String,
        required: true, // Password is a required field
    },
    profilePicture: {
        type: String,
        default: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=900&t=st=1696427985~exp=1696428585~hmac=d37daad92234b121053f11f491d2af2044c44a1a4b44401c815453747b60952b"
    },
    location: {
        type: String,
        default: null, // Optional field, default is null
    },
    dateOfBirth: {
        type: Date,
        default: null, // Optional field, default is null
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // References the 'User' model for followers
        },
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // References the 'User' model for following
        },
    ],
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});

// Creating the User model using the schema
const User = mongoose.model('UserModel', userSchema);

module.exports = User; // Exporting the User model

