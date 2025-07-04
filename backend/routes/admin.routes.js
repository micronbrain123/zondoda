const express= require('express');
const router = express.Router();
const adminController=require('../controllers/admin.controller');
const verifyToken = require('../middlewares/auth.middleware');


// POST /admin/login
router.post('/login',adminController.adminController);

// GET /admin/profile
router.get('/profile',verifyToken, adminController.getAdminProfile);

module.exports= router;