const express = require('express');
const router = express.Router();

// ✅ Mock data
const recyclers = [
  {
    id: 1,
    name: "Nairobi Plastic Recyclers",
    description: "We recycle plastics in Nairobi County.",
    lat: -1.2921,
    lng: 36.8219,
  },
  {
    id: 2,
    name: "EcoGreen Mombasa",
    description: "Collecting and recycling glass waste.",
    lat: -4.0435,
    lng: 39.6682,
  },
  {
    id: 3,
    name: "Kisumu Waste Collectors",
    description: "Handles e-waste responsibly in Kisumu.",
    lat: -0.1022,
    lng: 34.7617,
  },
];

// ✅ GET all recyclers
router.get("/", (req, res) => {
  res.json(recyclers);
});

module.exports = router;
