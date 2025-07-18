const express = require('express');
const router = express.Router();
const { createPickup } = require('../controllers/pickupController');

router.post('/', createPickup);

module.exports = router;
