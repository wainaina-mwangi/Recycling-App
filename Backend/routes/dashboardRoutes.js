const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/dashboardController');

// @route GET /api/dashboard
router.get('/', getDashboardStats);

module.exports = router;
