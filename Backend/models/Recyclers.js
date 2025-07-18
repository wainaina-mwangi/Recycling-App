const mongoose = require('mongoose');

const recyclerSchema = new mongoose.Schema({
  name: String,
  address: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  acceptedItems: [String]
}, { timestamps: true });

module.exports = mongoose.model('Recycler', recyclerSchema);
