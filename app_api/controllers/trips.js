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

// POST: /trips - adds a new trip
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = await Model.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res
      .status(201)
      .json(newTrip);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Trip creation failed", error: err.message });
  }
};

// PUT: /trips/:tripCode - Updates an existing Trip
const tripsUpdateTrip = async (req, res) => {
  try {
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    const updatedTrip = await Model.findOneAndUpdate(
      { code: req.params.tripcode }, // match by trip code
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true } // return updated document
    ).exec();

    if (!updatedTrip) {
      return res
        .status(404)
        .json({ message: "Trip not found or update failed" });
    }

    console.log("Updated trip:", updatedTrip);
    return res.status(200).json(updatedTrip);

  } catch (err) {
    console.error("Update error:", err.message);
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};


module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
