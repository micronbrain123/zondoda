
const Locations=require("../models/location.model")


exports.AddLocation = async (req, res) => {
  try {
    const {
      name, city, state, pincode,
      latitude, longitude, mapLink, address
    } = req.body;

    if (!name || !city || !state || !pincode || !latitude || !longitude || !address) {
      return res.status(400).json({ error: "All required fields must be provided." });
    }

    const newLocation = new Locations({
      name,
      city,
      state,
      pincode,
      latitude,
      longitude,
      mapLink,
      address,
    });

    await newLocation.save();
    res.status(201).json({ message: "Location added successfully", location: newLocation });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
    console.log("Error adding location:", err);
    
  }
};

exports.getAlllocations=async(req,res)=>{
    try {
        const allLocation=await Locations.find({}) ;
        if(!allLocation){
            return res.status(404).json({error:"No locations found"})
        }
        res.status(200).json({
            message:"All locations fetched successfully",
            locations:allLocation
        })
    } catch (error) {
        res.status(500).json({error:"Server error", details:error.message});
        // console.log("Error fetching locations:", error);
    }
}