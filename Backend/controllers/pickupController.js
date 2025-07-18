const asyncHandler = require('express-async-handler');
const Pickup = require('../models/PickupRequest');

const createPickup = asyncHandler(async (req, res) => {
  const { location, numberPlate, vehicleType } = req.body;

  if (!location || !numberPlate || !vehicleType) {
    res.status(400);
    throw new Error('All fields are required');
  }

  const pickup = await Pickup.create({ location, numberPlate, vehicleType });

  res.status(201).json({ message: 'Pickup created successfully', pickup });
});

module.exports = { createPickup };
