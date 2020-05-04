var mongoose = require('mongoose');

var userModel = new mongoose.Schema({
    nameUser: {
        type: String
    },
    phoneUser: {
        type: String
    }
})

mongoose.model("User", userModel);