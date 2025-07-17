const express = require('express');
const router = express.Router();
const {
  createRequest,
  getRequests,
} = require('../controllers/requestController');

// @route POST /api/requests
router.post('/', createRequest);

// @route GET /api/requests
router.get('/', getRequests);

module.exports = router;
