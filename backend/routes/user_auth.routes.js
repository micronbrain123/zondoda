const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_auth.controller');
const verifyToken = require('../middlewares/auth.middleware');

// Public routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Protected route
router.get('/profile', verifyToken, userController.getProfile);

// Update Profile
router.put('/update', verifyToken, userController.updateProfile);

module.exports = router;
