const express = require('express');
const router = express.Router(); // Create a router instance

const authController = require('../controllers/authController');

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

module.exports = router; // Export the router instance
