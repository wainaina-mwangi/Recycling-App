const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  wasteType: String,
  photo: String,
  status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
  preferredTime: Date
}, { timestamps: true });

module.exports = mongoose.model('PickupRequest', pickupSchema);
