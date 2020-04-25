var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product')
const Order = mongoose.model('Order')
const Schedule = mongoose.model('Schedule')
const Location = mongoose.model('Location')
const Stylist = mongoose.model('Stylist')
const Service = mongoose.model('Service')

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

router.get("/result", (req, res) => {
    var id = req.query.id ;
    if(!id){
        res.send("VUi long khong de trong id");
        //nếu có lỗi thì dừng luôn
        return;
    }
    Product.find({ typeProduct: id }).exec((err, docs) => {
        res.send(docs)
    })
})

router.get("/result/asc/:id", (req, res) => {
    var id = req.params.id ;
    Product.find({ typeProduct: id }).sort({priceProduct: 1}).exec((err, docs) => {
        res.send(docs)
    })
})

router.get("/location", (req, res) => {
    Location.find((err, docs) => {
        res.send(docs)
    })
})

router.get("/stylist",(req,res)=>{
    Stylist.find((err,docs)=>{
        res.send(docs)
    })
})

router.get("/service",(req,res)=>{
    Service.find((err,docs)=>{
        res.send(docs)
    })
})

router.get("/order",(req,res)=>{
    Order.find((err,docs)=>{
        res.send(docs)
    })
})

module.exports = router;