var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product')
const Order = mongoose.model('Order')
const Schedule = mongoose.model('Schedule')
const Location = mongoose.model('Location')
const Stylist = mongoose.model('Stylist')
const Service = mongoose.model('Service')
const User = mongoose.model('User')

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

router.post('/bookingSchedule', urlencodedParser, (req, res) => {
    var nameSchedule = req.query.nameSchedule;
    var phoneSchedule = req.query.phoneSchedule;
    var locationSchedule = req.query.locationSchedule;
    var timeSchedule = req.query.timeSchedule;
    var dateSchedule = req.query.dateSchedule;
    var stylistSchedule = req.query.stylistSchedule;
    var serviceSchedule = req.query.serviceSchedule;
    var statusSchedule = req.query.statusSchedule;

    Schedule.create([
        {
            "nameSchedule": nameSchedule,
            "phoneSchedule": phoneSchedule,
            "locationSchedule": locationSchedule,
            "timeSchedule": timeSchedule,
            "dateSchedule": dateSchedule,
            "stylistSchedule": stylistSchedule,
            "serviceSchedule": serviceSchedule,
            "statusSchedule": statusSchedule
        }
    ], (err) => {
        if (!err) {
            res.send("thêm thành công")
        } else {
            res.send(err)
        }
    })
})

//Thêm người dùng
router.post('/addUser', urlencodedParser, (req, res) => {
    var nameUser = req.query.nameUser;
    var phoneUser = req.query.phoneUser;

    if (!nameUser || !phoneUser) {
        res.send('Vui lòng nhập đủ thông tin')
    } else {
        User.create([{
            "nameUser": nameUser,
            "phoneUser": phoneUser
        }])
        res.send('Thêm người dùng thành công')
    }

})

//Tìm tên người dùng theo SĐT
router.post('/findNameUser', urlencodedParser, (req, res) => {
    var phoneUser = req.query.phoneUser;
    if (!phoneUser) {
        res.send("Vui lòng nhập đủ thông tin")
    } else {
        User.findOne({ phoneNumber: phoneNumber }, (err, res) => {
            res.send("res")
        })
    }
})

//Sửa tên người dùng theo SĐT
router.post("/updateUser", (req, res) => {
    var name = req.query.name;
    var phoneUser = req.query.phoneUser;
    User.updateOne({ phoneUser: phoneUser }, { nameUser: name }, (err, docs) => {
        if (!err) {
            res.send("Sửa thành công")
        } else {
            res.send("Lỗi cmnr")
        }
    })
})

router.get("/result", (req, res) => {
    var id = req.query.id;
    if (!id) {
        res.send("VUi long khong de trong id");
        //nếu có lỗi thì dừng luôn
        return;
    }
    Product.find({ typeProduct: id }).exec((err, docs) => {
        res.send(docs)
    })
})

router.get("/searchProduct", (req, res) => {
    var name = req.query.name;
    if (!name) {
        res.send("VUi long khong de trong tên sản phẩm");
        //nếu có lỗi thì dừng luôn
        return;
    }
    Product.find({ nameProduct: name }).exec((err, docs) => {
        res.send(docs)
    })
})


//Sắp xếp sản phẩm tăng dần
router.get("/result/asc", (req, res) => {
    var id = req.query.id;
    Product.find({ typeProduct: id }).sort({ priceProduct: 1 }).exec((err, docs) => {
        res.send(docs)
    })
})

//Sắp xếp sản phẩm giảm dần
router.get("/result/dsc", (req, res) => {
    var id = req.query.id;
    Product.find({ typeProduct: id }).sort({ priceProduct: -1 }).exec((err, docs) => {
        res.send(docs)
    })
})


router.get("/location", (req, res) => {
    Location.find((err, docs) => {
        res.send(docs)
    })
})

router.get("/stylist", (req, res) => {
    Stylist.find((err, docs) => {
        res.send(docs)
    })
})

router.get("/service", (req, res) => {
    Service.find((err, docs) => {
        res.send(docs)
    })
})

router.get("/order", (req, res) => {
    Order.find((err, docs) => {
        res.send(docs)
    })
})

router.get("/user", (req, res) => {
    User.find((err, docs) => {
        res.send(docs)
    })
})



module.exports = router;