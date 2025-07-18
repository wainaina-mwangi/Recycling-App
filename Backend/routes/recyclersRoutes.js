const express = require('express');
const router = express.Router();
const {
  getRecyclers,
  addRecycler,
} = require('../controllers/recyclerController');

// @route GET /api/recyclers
router.get('/', getRecyclers);

// @route POST /api/recyclers
router.post('/', addRecycler);

module.exports = router;
