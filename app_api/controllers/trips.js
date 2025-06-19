const mongoose = require('mongoose');
require('../models/travlr'); // ensure the Trip model is registered
const Model = mongoose.model('trips');   // get the Trip model // ensure the model is registered
const User = mongoose.model('User'); // ensure the User model is registered

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
  getUser(req, res, async (req, res, user) => {
    console.log("tripsAddTrip invoked by user:", user.email);
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

      return res.status(201).json(newTrip);
    } catch (err) {
      return res.status(400).json({ message: "Trip creation failed", error: err.message });
    }
  });
};

const tripsUpdateTrip = async (req, res) => {
  getUser(req, res, async (req, res, user) => {
    console.log("tripsUpdateTrip invoked by user:", user.email);
    try {
      console.log("Params:", req.params);
      console.log("Body:", req.body);
      console.log("User performing update:", user.email);

      const updatedTrip = await Model.findOneAndUpdate(
        { code: req.params.tripcode },
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
        { new: true, runValidators: true }
      ).exec();

      if (!updatedTrip) {
        return res.status(404).json({ message: "Trip not found or update failed" });
      }

      return res.status(200).json(updatedTrip);
    } catch (err) {
      console.error("Update error:", err.message);
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }
  });
};


const getUser = (req, res, callback) => {
  if (req.payload && req.payload.email) {
    User.findOne({ email: req.payload.email })
      .exec()
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        } else {
          callback(req, res, user);
        }
      })
      .catch(err => res.status(500).json(err));
  } else {
    res.status(401).json({ message: "Unauthorized: No payload found" });
  }
};


module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
