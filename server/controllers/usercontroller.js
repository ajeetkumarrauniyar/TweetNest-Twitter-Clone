const UserModel = require('../models/user_model'); // Importing the User model

const registration = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        // Checking if any of the required fields are missing
        if (!name || !username || !email || !password) {
            return res.status(400).send({ message: "All fields are mandatory" }); // Return a 400 response with an error message
        }

        // Checking if a user with the same email already exists
        let user = await UserModel.findOne({ email });

        if (user) {
            return res.status(400).send({ message: "Email Id Already registered" }); // Return a 400 response with an error message
        }
    } catch (error) {
        console.log(error); // Log any errors that occur during the registration process
    }
}

module.exports = { registration }; // Exporting the registration function 
