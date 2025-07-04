// routes/extraFeatureRoutes.js
const express = require("express");
const router = express.Router();
const {
  createFeature,
  getAllFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature,
} = require("../controllers/features.controller");

// POST /api/features
router.post("/add", createFeature);

// GET /api/features
router.get("/", getAllFeatures);

// GET /api/features/:id
router.get("/:id", getFeatureById);

// PUT /api/features/:id
router.put("/update/:id", updateFeature);

// DELETE /api/features/:id
router.delete("/delete/:id", deleteFeature);

module.exports = router;
