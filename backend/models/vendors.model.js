const mongoose = require('mongoose');


//Scheema Designing
const VendorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },
    phn:{
        type: Number,
        required: [true, 'Please provide a phone number'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
     address: {
        type: String,
        required: [true, 'Please provide a Address']
    },
    Status:{
        type:String,
        default:'Not Verified',
    }
},
    { timestamps: true }
);


//Exportiong VENDORMODEL
module.exports = mongoose.model('vendors', VendorSchema);