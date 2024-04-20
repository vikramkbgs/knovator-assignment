const passport = require('../config/passport');

const authenticateJWT = async (req, res, next) => {
    try {
        // Get the token from the request headers
        const token = req.headers.authorization.split(' ')[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Find the user based on the decoded token
        const user = await User.findById(decoded.id);

        if (!user) {
            throw new Error('User not found');
        }

        // Attach the authenticated user to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticateJWT;