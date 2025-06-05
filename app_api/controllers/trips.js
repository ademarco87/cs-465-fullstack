const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register the Trip model
const Model = mongoose.model('trips');   // get the Trip model

// GET: /trips - lists all trips
const tripsList = async (req, res) => {
  try {
    const q = await Model.find({}).exec();

    if (q.length === 0) {
      return res
        .status(404)
        .json({ message: "No trips found" });
    } else {
      return res
        .status(200)
        .json(q);
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Model.find({ 'code': req.params.tripcode }).exec();

    if (q.length === 0) {
      return res
        .status(404)
        .json({ message: "Trip not found" });
    } else {
      return res
        .status(200)
        .json(q[0]); // only return the first match
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
