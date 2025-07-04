const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  brandname: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Brand', brandSchema);
