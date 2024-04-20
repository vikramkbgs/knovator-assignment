require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
