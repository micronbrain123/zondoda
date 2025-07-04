
const ExtraFeature = require("../models/features.model");

// Create a new feature
exports.createFeature = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const feature = new ExtraFeature({ name, description, price });
    await feature.save();
    res.status(201).json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all features
exports.getAllFeatures = async (req, res) => {
  try {
    const features = await ExtraFeature.find().sort({ createdAt: -1 });
    res.status(200).json(
       {
         message:"Features retrieved successfully",
        features: features
       }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single feature by ID
exports.getFeatureById = async (req, res) => {
  try {
    const feature = await ExtraFeature.findById(req.params.id);
    if (!feature) return res.status(404).json({ error: "Not found" });
    res.status(200).json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a feature
exports.updateFeature = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updated = await ExtraFeature.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a feature
exports.deleteFeature = async (req, res) => {
  try {
    const deleted = await ExtraFeature.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Feature deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
