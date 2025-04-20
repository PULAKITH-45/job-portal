const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = decoded; // Attach user information to the request
        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

exports.isOwner = (req, res, next) => {
    if (req.user && req.user.role === 'owner') {
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized: Only owners can access this' });
    }
};

exports.isWorker = (req, res, next) => {
    if (req.user && req.user.role === 'worker') {
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized: Only workers can access this' });
    }
};