const express = require("express");
const router = express.Router();
const carController = require("../controllers/cars.controller");
const multer = require("multer");
const path = require("path");

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/cars/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Multiple file fields setup
const multiUpload = upload.fields([
  { name: "mainImage", maxCount: 1 },
  { name: "additionalImages", maxCount: 15 },
  { name: "insuranceDocument", maxCount: 1 },
  { name: "permitDocument", maxCount: 1 }
]);

// Routes
router.post("/create", multiUpload, carController.createCar);
router.get("/", carController.getAllCars);

module.exports = router;
