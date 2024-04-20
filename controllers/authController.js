const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        user = new User({ username, email, password });

        // Save the user to the database
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.profile = async (req, res) => {
    // Logic to access user profile
    res.json({ user: req.user });
};

module.exports = exports;
