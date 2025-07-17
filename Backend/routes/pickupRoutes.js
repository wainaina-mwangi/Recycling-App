const express = require('express');
const router = express.Router();
const { createPickup, getPickups } = require('../controllers/pickupController');

router.post('/', createPickup);
router.get('/', getPickups);

module.exports = router;
