const express=require("express");
const router=express.Router();
const NewLocation=require("../controllers/location.controller")
// add location
router.post("/add",NewLocation.AddLocation)

router.get('/',NewLocation.getAlllocations)

module.exports=router;