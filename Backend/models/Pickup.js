const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema(
  {
    collector: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // or a separate 'Collector' model if you prefer
      required: true,
    },
    request: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request',
      required: false, // Optional: can be a manual pickup
    },
    location: {
      type: String,
      required: true,
    },
    scheduledDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['Scheduled', 'Completed', 'Missed'],
      default: 'Scheduled',
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Pickup = mongoose.model('Pickup', pickupSchema);

module.exports = Pickup;
