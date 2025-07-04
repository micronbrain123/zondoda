// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB=require('./config/mongodb')
const path = require('path');
// Load env variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // replace with your Next.js frontend URL
  credentials: true, // if you send cookies or auth headers
}));

// Sample route
app.get('/', (req, res) => {
  res.send('✅ Server is running!');
});

// Auth routes (example)
app.use('/api/auth/users', require('./routes/user_auth.routes'));
app.use('/api/auth/admin', require('./routes/admin.routes'));

// User and Vendor lists routes
app.use('/api/users&vendors', require('./routes/users&vendors.routes'));

//brands routes
app.use('/api/brands',require('./routes/brands.routes'))

//cars routes
app.use('/api/cartypes',require('./routes/cartype.routes'))
app.use('/api/cars', require('./routes/cars.routes'));


// Location routes
app.use('/api/locations', require('./routes/location.routes'));

// features routes
app.use('/api/features',require('./routes/features.routes'));


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});




// ontime admin creation script 
// don't touch this code 

// const bcrypt = require("bcrypt");
// const Admin = require("./models/admin.model"); // path to your model

// async function createAdmin() {
//   const hashedPassword = await bcrypt.hash("zondoda123", 10);
//   const newAdmin = new Admin({
//     email: "admin@zondoda.com",
//     password: hashedPassword,
//     name: "Admin"
//   });
//   await newAdmin.save();
//   console.log("Admin created!");
// }
// createAdmin();
