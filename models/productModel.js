var mongoose = require('mongoose')

var productModel = new mongoose.Schema({
    imageProduct :{
        type : String
    },
    nameProduct : {
        type : String
    },
    priceProduct : {
        type : String
    },
    typeProduct : {
        type : String
    },
    descriptionProduct :{
        type : String
    },
    ratingProduct:{
        type : String
    }
})

mongoose.model('Product',productModel)