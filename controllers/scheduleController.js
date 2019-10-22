var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product')

router.post('/order',(req,res)=>{
    var body = req.params.body;
    res.send(body);
})

router.get("/result/:id",(req,res)=>{
    var id = req.params.id;
    Product.find({typeProduct:id}).exec((err,docs)=>{
        res.send(docs)
    })
})


module.exports = router;