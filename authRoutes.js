const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers'); // Corrected path (plural 's')

router.post('/api/auth/register', authControllers.registerUser);
router.post('/api/auth/login', authControllers.loginUser); // Assuming you have a login route defined here as well

module.exports = router;
