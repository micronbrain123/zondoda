const express = require("express");
const router = express.Router();
const CarTypeController = require("../controllers/carType.controller");

// Routes
router.post("/add", CarTypeController.addCarType);
router.get("/", CarTypeController.getCarTypes);
router.delete("/delete/:id", CarTypeController.deleteCarType);

module.exports = router;
