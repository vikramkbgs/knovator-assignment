const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const postRoutes = require('./postRoutes');

//views
router.get('/login', (req, res) => {
    res.render('login');
});

// Route to render the register page
router.get('/register', (req, res) => {
    res.render('register');
});

// Mount authentication routes
router.use('/auth', authRoutes);

// Mount post routes
router.use('/post', postRoutes);

module.exports = router;
