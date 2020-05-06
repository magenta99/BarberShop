const mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
    idSchedule: {
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
    }
    ,
    statusSchedule: {
        type: Boolean
    }
})

mongoose.model("Schedule", scheduleSchema)