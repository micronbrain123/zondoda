const UserSchema= require("../models/user.model");
const Vendors= require("../models/vendors.model");

exports.getAllUserSchema=async(req,res)=>{
    try {
        const users=await UserSchema.find({});
        if(!users) {
            return res.status(404).json({ message: "No User found" });
        }   
        res.status(200).json({
            message: "User fetched successfully",
            data: users
        })
    } catch (error) {
        console.error("Error fetching Users:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}

