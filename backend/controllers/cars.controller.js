const Car = require("../models/car.model");
const fs = require("fs");
const path = require("path");

exports.createCar = async (req, res) => {
  try {
    const {
      title, description, color, engineSize, year, model, fuelType,
      transmission, seats, mileage, doors, brand, carType,
      pickupLocation, dropLocation, price, features, registrationNumber
    } = req.body;

    const car = new Car({
      title,
      description,
      color,
      engineSize,
      year,
      model,
      fuelType,
      transmission,
      seats,
      mileage,
      doors,
      brand,
      carType,
      pickupLocation,
      dropLocation,
      price: JSON.parse(price),
      features: JSON.parse(features),
      registrationNumber,
    });

    if (req.files) {
      if (req.files.mainImage) car.mainImage = req.files.mainImage[0].path;
      if (req.files.additionalImages)
        car.additionalImages = req.files.additionalImages.map(f => f.path);
      if (req.files.insuranceDocument) car.insuranceDocument = req.files.insuranceDocument[0].path;
      if (req.files.permitDocument) car.permitDocument = req.files.permitDocument[0].path;
    }

    await car.save();
    res.status(201).json({ success: true, car });
  } catch (error) {
    console.error("Create Car Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find()
    
     res.json({ success: true, cars:cars });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
