var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product')
const Order = mongoose.model('Order')
const Schedule = mongoose.model('Schedule')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/order', urlencodedParser, (req, res) => {
    var imageProduct = req.body.imageProduct;
    var nameProduct = req.body.nameProduct;
    var amountProduct = req.body.amountProduct;
    var priceProduct = req.body.priceProduct;
    var fullName = req.body.fullName;
    var phoneNumber = req.body.phoneNumber;
    var address = req.body.address;

    Order.create([
        {
            "imageProduct": imageProduct,
            "nameProduct": nameProduct,
            "amountProduct": amountProduct,
            "priceProduct": priceProduct,
            "fullName": fullName,
            "phoneNumber": phoneNumber,
            "address": address
        }
    ])
})

router.post('/schedule', urlencodedParser, (req, res) => {
    var fullName = req.body.fullName;
    var phoneNumber = req.body.phoneNumber;
    var day = req.body.day;
    var time = req.body.time;
    var place = req.body.place;

    Schedule.create([
        {
            "fullName": fullName,
            "phoneNumber": phoneNumber,
            "day": day,
            "time": time,
            "place": place
        }
    ])
})

router.get("/result/:id", (req, res) => {
    var id = req.params.id;
    Product.find({ typeProduct: id }).exec((err, docs) => {
        res.send(docs)
    })
})


module.exports = router;