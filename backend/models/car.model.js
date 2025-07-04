const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  color: String,
  engineSize: String,
  year: Number,
  model: String,
  fuelType: String,
  transmission: String,
  seats: Number,
  mileage: Number,
  doors: Number,
  registrationNumber: { type: String, required: true, unique: true },

  brand: { type: String, ref: "Brand" },
  carType: { type: String, ref: "CarType" },

  price: {
    perDay: Number,
    perWeek: Number,
    perMonth: Number
  },

  pickupLocation: { type: String, ref: "Locations" },
  dropLocation: { type: String, ref: "Locations" },

  features: {
    airConditioning: Boolean,
    gps: Boolean,
    bluetooth: Boolean,
    usb: Boolean,
    musicSystem: Boolean,
    parkingSensors: Boolean,
    rearCamera: Boolean
  },

  mainImage: String,
  additionalImages: [String],
  insuranceDocument: String,
  permitDocument: String
}, { timestamps: true });

module.exports = mongoose.model("Cars", carSchema);
