const { signupValidation, loginValidation } = require('../Middleware/authValidation');
const authController = require('../controllers/authController');

const router = require('express').Router();



router.post('/register', signupValidation, authController.signup);
router.post('/login', loginValidation, authController.login);


module.exports = router;

