// controllers/dashboardController.js

const Request = require('../models/Request');
const Pickup = require('../models/Pickup');
const Recycler = require('../models/Recycler');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalRequests = await Request.countDocuments();
    const totalPickups = await Pickup.countDocuments();
    const totalRecyclers = await Recycler.countDocuments();

    res.status(200).json({
      requests: totalRequests,
      pickups: totalPickups,
      recyclers: totalRecyclers,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load dashboard stats' });
  }
};
