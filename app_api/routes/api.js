const express = require("express");
const router = express.Router();

console.log("API Routes Loaded"); // added for debugging

const tripsController = require("../controllers/trips");

router.route("/trips").get(tripsController.tripsList);

// GET Method routes tripsFindbyCode - requires parameter
router
    .route("/trips/:tripcode")
    .get(tripsController.tripsFindByCode);

module.exports = router;