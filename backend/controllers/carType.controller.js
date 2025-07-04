const CarType = require("../models/cartypes.model");

// Add Car Type
exports.addCarType = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Car type name is required." });
    }

    const existing = await CarType.findOne({ name });
    if (existing) {
      return res.status(409).json({ error: "Car type already exists." });
    }

    const carType = new CarType({ name, description });
    const saved = await carType.save();

    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Car Types
exports.getCarTypes = async (req, res) => {
  try {
    const types = await CarType.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: types });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Car Type
exports.deleteCarType = async (req, res) => {
  try {
    const { id } = req.params;
    await CarType.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Car type deleted." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
