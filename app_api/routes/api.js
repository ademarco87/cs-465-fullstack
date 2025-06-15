const express = require("express");
const router = express.Router();

console.log("API Routes Loaded"); // added for debugging

const tripsController = require("../controllers/trips");

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripcode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
