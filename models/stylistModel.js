var mongoose = require('mongoose');

var stylistModel = new mongoose.Schema({
    nameStylist:{
        type:String
    },
    ratingStylist:{
        type:String
    }
})

mongoose.model("Stylist",stylistModel);