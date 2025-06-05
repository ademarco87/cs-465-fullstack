var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

/* GET all trips page */
router.get('/', controller.travel);

/* GET individual trip details page */
router.get('/:tripcode', controller.travel);

module.exports = router;
