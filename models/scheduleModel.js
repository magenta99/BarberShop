const mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
    nameSchedule: {
        type: String
    },
    phoneSchedule: {
        type: String
    },
    locationSchedule: {
        type: String
    },
    timeSchedule: {
        type: String
    },
    dateSchedule: {
        type: String
    },
    stylistSchedule: {
        type: String
    },
    serviceSchedule: {
        type: String
    },
    statusSchedule: {
        type: Boolean
    },
    imageSchedule: {
        type: String
    }
})

mongoose.model("Schedule", scheduleSchema)