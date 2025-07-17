// controllers/requestController.js

const Request = require('../models/Request');

// @desc    Submit a new pickup/report request
// @route   POST /api/requests
exports.createRequest = async (req, res) => {
  try {
    const { user, type, description, location, imageUrl } = req.body;
    const newRequest = new Request({ user, type, description, location, imageUrl });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create request' });
  }
};

// @desc    Get all requests
// @route   GET /api/requests
exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching requests' });
  }
};
