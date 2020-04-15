var mongoose = require('mongoose');

var locationModel = new mongoose.Schema({
    addressLocation:{
        type:String
    },
    districtLocation:{
        type:String
    },
    districtDetailLocation:{
        type:String
    },
    cityLocation:{
        type:String
    }
})

mongoose.model("Location",locationModel);