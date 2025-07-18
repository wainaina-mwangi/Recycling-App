const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  location: { type: String, required: true },
  numberPlate: { type: String, required: true },
  vehicleType: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Pickup', pickupSchema);
