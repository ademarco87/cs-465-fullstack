// This code handles user authentication in a Node.js application using Passport.js and Mongoose.
// It provides two main functions: `register` for creating a new user and `login` for authenticating an existing user.
// The `register` function checks for required fields, creates a new user, sets the password, saves the user to the database, and returns a JWT token.
// The `login` function checks for required fields, uses Passport's local strategy to authenticate the user, and returns a JWT token if successful or an error message if not.
// The code assumes that the necessary models and configurations (like JWT secret) are already set up in the application.
// It also handles error responses appropriately, ensuring that the client receives meaningful feedback on authentication attempts.

const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');
console.log("/api/login was hit");

const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  try {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    await user.save(); // <-- await instead of callback

    const token = user.generateJwt();
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = (req, res, next) => {
  console.log("🔐 Login controller hit");
  console.log("Request body:", req.body);

  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  passport.authenticate('local', (err, user, info) => {
    console.log("Passport callback triggered");
    if (err) {
      console.log("Error:", err);
      return res.status(404).json(err);
    }
    if (user) {
      console.log("✅ User authenticated:", user.email);
      const token = user.generateJwt();
      return res.status(200).json({ token });
    } else {
      console.log("❌ Authentication failed:", info);
      return res.status(401).json(info || { message: 'Login failed.' });
    }
  })(req, res, next);
};

module.exports = {
    register,
    login
};
