// controllers/pickupController.js

const Pickup = require('../models/Pickup');

// @desc    Request garbage pickup
// @route   POST /api/pickups
exports.createPickup = async (req, res) => {
  try {
    const { location, requester, preferredTime, contact } = req.body;
    const pickup = new Pickup({ location, requester, preferredTime, contact });
    await pickup.save();
    res.status(201).json(pickup);
  } catch (error) {
    res.status(400).json({ error: 'Failed to request pickup' });
  }
};

// @desc    Get all pickup requests
// @route   GET /api/pickups
exports.getPickups = async (req, res) => {
  try {
    const pickups = await Pickup.find().sort({ createdAt: -1 });
    res.status(200).json(pickups);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching pickups' });
  }
};
