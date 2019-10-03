const mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
    dateTime : {
        type : String
    },
    phoneNumber : {
        type : String
    },
    place : {
        type : String
    },
    fullName : {
        type : String
    },
    services : {
        type : String
    }
})

mongoose.model("Schedule",scheduleSchema)