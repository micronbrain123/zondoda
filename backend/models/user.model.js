const mongoose = require('mongoose');


//Scheema Designing
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },
    phone:{
        type: Number,
        required: [true, 'Please provide a phone number'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please provide a date of birth']
    },
     address: {
        type: String,
        required: [true, 'Please provide an Address']
    },
    city:{
        type: String,
        required: [true, 'Please provide a City']
    },
    state:{
        type: String,
        required: [true, 'Please provide a State']
    },
    zipCode:{
        type: String,
        required: [true, 'Please provide a Zip Code']
    },
    licenseNumber:{
        type: String,
        required: [true, 'Please provide a License Number'],
        unique: true
    },
    status:{
        type:String,
        default:'Not Verified',
    }
},
    { timestamps: true }
);


//Exportiong USERMODEL
module.exports = mongoose.model('users', UserSchema);