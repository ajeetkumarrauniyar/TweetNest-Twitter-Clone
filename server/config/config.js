require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    // Defining the JWT_TOKEN, using the value from the .env file if available, or a default value if not
    JWT_SECRET: process.env.SECRET_KEY || 'Ajcool$005487@as%ha1433$1972naV',
    // Defining the databaseURL, using the value from the .env file if available, or a default MongoDB URL if not
    databaseURL: process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/twitter-clone',
    // Defining the server port, using the value from the .env file if available, or a default port (5000) if not
    port: process.env.PORT || 5000,
}