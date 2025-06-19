const express = require("express");
const router = express.Router();

console.log("API Routes Loaded");

const jwt = require("express-jwt");
const user = require("../models/user");

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

const authController = require("../controllers/authentication");
const tripsController = require("../controllers/trips");

// Auth routes
console.log("Login route is being registered");
router.post('/login', authController.login);
router.post('/register', authController.register);

// Trip routes
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(auth, tripsController.tripsAddTrip);

router
  .route('/trips/:tripcode')
  .get(tripsController.tripsFindByCode)
  .put(auth, tripsController.tripsUpdateTrip);

router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

module.exports = router;
