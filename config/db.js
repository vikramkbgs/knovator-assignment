const mongoose = require('mongoose');
const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost:27017/knovator';
// Connect to MongoDB
mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
