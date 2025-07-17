// controllers/recyclerController.js

const Recycler = require('../models/Recycler');

// @desc    Get all recyclers
// @route   GET /api/recyclers
exports.getRecyclers = async (req, res) => {
  try {
    const recyclers = await Recycler.find();
    res.status(200).json(recyclers);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching recyclers' });
  }
};

// @desc    Add a new recycler
// @route   POST /api/recyclers
exports.addRecycler = async (req, res) => {
  try {
    const { name, location, materialsAccepted, contact } = req.body;
    const recycler = new Recycler({ name, location, materialsAccepted, contact });
    await recycler.save();
    res.status(201).json(recycler);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add recycler' });
  }
};
