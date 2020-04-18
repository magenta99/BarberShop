var mongoose = require('mongoose');

var stylistModel = new mongoose.Schema({
    nameStylist:{
        type:String
    },
    ratingStylist:{
        type:Float
    }
})

mongoose.model("Stylist",stylistModel);