var mongoose = require('mongoose');

var stylistModel = new mongooseSchema({
    nameStylist:{
        type:String
    },
    ratingStylist:{
        type:String
    }
})
mongoose.model("Stylist",stylistModel);