const User = require('../models/user.model'); // Adjust path based on your folder structure
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Secret key for JWT (store securely in .env)
const JWT_SECRET = process.env.JWT_SECRET || '74a1f2685ea590aef29d11477a46e96cc58f112ed1dc4a49a121d4be6d6c9392cdd9318d';

// Register User
exports.registerUser = async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone, password,
      dateOfBirth, address, city, state, zipCode,
      licenseNumber
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }, { licenseNumber }] });
    if (existingUser) {
      return res.status(400).json({
        message: 'User with this email, phone or license number already exists.'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      dateOfBirth,
      address,
      city,
      state,
      zipCode,
      licenseNumber
    });

    await user.save();

    return res.status(201).json({
      message: 'User registered successfully!',
      userId: user._id
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Server error during registration.' });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        status: user.status
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login.' });
  }
};

// Get Profile (optional protected route)
exports.getProfile = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from token via middleware
    const user = await User.findById(userId).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ "success": true, user:user });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch profile' });
  }
};


// Update Profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from token via middleware
    const updates = req.body;

    const user = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ "success": true, user:user });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update profile' });
  }
};
