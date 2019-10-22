var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product')
var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/order',urlencodedParser,(req,res)=>{
    var body = req.body;
    res.send(body);
})

router.get("/result/:id",(req,res)=>{
    var id = req.params.id;
    Product.find({typeProduct:id}).exec((err,docs)=>{
        res.send(docs)
    })
})


module.exports = router;