const mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    day: {
        type: String
    },
    time: {
        type: String
    },
    place: {
        type: String
    }
})

mongoose.model("Schedule", scheduleSchema)