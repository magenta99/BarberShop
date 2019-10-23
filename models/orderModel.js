var mongoose = require('mongoose')

var orderModel = new mongoose.Schema({
    imageProduct :{
        type:String
    },
    nameProduct:{
        type:String
    },
    amountProduct: {
        type: String
    },
    priceProduct:{
        type:String
    },
    fullName:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    address:{
        type:String
    }
})

mongoose.model('Order',orderModel)