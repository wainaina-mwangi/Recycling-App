const express = require('express');
const router = express.Router();
const { register, login,logoutUser, } = require('../controllers/authController');

// @route POST /api/auth/register
router.post('/register', register);

// @route POST /api/auth/login
router.post('/login', login);
// @route POST /api/auth/logout
router.post('/logout', logoutUser);

module.exports = router;
