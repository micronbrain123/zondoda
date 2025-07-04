const express=require('express');
const router=express.Router();

const uservendorList=require('../controllers/users&vendors.controller');


router.get('/users',uservendorList.getAllUserSchema);


module.exports=router;