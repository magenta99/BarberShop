var mongoose = require('mongoose');

var serviceModel = new mongoose.Schema({
    nameService :{
        type:String
    },
    priceService:{
        type:String
    }
})

mongoose.model("Service",serviceModel);