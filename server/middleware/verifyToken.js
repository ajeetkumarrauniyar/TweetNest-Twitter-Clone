const JWT = require("jsonwebtoken");

// Function to verify the JWT token
exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // Check if the token is missing
  if (!token) {
    return res
      .status(401)
      .json({ status: 401, message: "Access token is required" });
  }

  // Verify the token using the SECRET_KEY
  JWT.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      // Handle invalid token
      return res.status(403).json({
        error: "Token is Invalid.",
      });
    }

    // Attach the user to the request for future use
    req.user = user;

    next();
  });
};
