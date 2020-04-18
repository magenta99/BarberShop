var mongoose = require('mongoose');

var serviceModel = new mongoose.Schema({
    nameService:{
        type:String
    },
    detailService:{
        type:String
    },
    priceService:{
        type:String
    }
})

mongoose.model("Service",serviceModel);