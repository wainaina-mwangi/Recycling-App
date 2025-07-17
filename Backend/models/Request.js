const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String, // e.g., URL or file path
    },
    category: {
      type: String,
      enum: ['Plastic', 'Organic', 'Electronic', 'Metal', 'Other'],
      default: 'Other',
    },
    status: {
      type: String,
      enum: ['Pending', 'Scheduled', 'Collected'],
      default: 'Pending',
    },
    requestedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
