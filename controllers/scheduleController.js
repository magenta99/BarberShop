var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product')

router.get("/result",(req,res)=>{
    Product.find().exec((err,docs)=>{
        res.send(docs)
    })
})


module.exports = router;