const express = require('express');
const router = express.Router();


const { register } = require('../controllers/authController');

//  Route definition
router.post('/register', register);

module.exports = router;
