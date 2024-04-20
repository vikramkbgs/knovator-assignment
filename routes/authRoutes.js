const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateJWT = require('../middleware/authMiddleware');

// Registration route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Example protected route
router.get('/profile', authController.profile);

module.exports = router;