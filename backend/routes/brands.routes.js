const express = require("express");
const router = express.Router();
const BrandController = require("../controllers/brand.controller");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Ensure uploads/brands exists
const uploadPath = path.join(__dirname, "../uploads/brands");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Route
router.post("/add", upload.single("logoUrl"), BrandController.addBrand);
// Get all brands
router.get("/", BrandController.getAllbrands);

module.exports = router;
