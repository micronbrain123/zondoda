const Brand = require("../models/brand.model");

// POST - Add Brand
exports.addBrand = async (req, res) => {
  try {
    const { brandname } = req.body;
    const logoUrl = req.file ? `/uploads/brands/${req.file.filename}` : "";

    if (!brandname || !logoUrl) {
      return res.status(400).json({ error: "Brand name and logo are required." });
    }

    const newBrand = new Brand({ brandname, logoUrl });
    const savedBrand = await newBrand.save();
    res.status(201).json({ success: true, brand: savedBrand });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET - Get All Brands
exports.getAllbrands=async(req,res)=>{
    try {
        const brands = await Brand.find();
        res.status(200).json({ success: true, brands: brands });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
