const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  mapLink: { type: String },
  address: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Locations", locationSchema);
