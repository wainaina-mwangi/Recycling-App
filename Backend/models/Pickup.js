const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  numberPlate: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

//  Prevent OverwriteModelError in dev/hot reload
const Pickup = mongoose.models.Pickup || mongoose.model('Pickup', pickupSchema);

module.exports = Pickup;
