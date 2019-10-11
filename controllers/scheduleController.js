var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product')

router.get("/result/:id",(req,res)=>{
    var id = req.params.id;
    Product.find({typeProduct:id}).exec((err,docs)=>{
        res.send(docs)
    })
})


module.exports = router;