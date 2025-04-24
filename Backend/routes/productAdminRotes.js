const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const Product=require("../models/Product")

const router = express.Router();

// Route to get all products (Admin only)
router.get('/', protect, admin,async(req,res)=>{
    try {
        const products=await Product.find({})
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"})
        
    }
});

module.exports = router;
