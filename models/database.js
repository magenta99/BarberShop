const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@database-uyoe8.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connect Database Success');

    } else {
        console.log('Connect Database Fail');
    }
})

require('./scheduleModel')
require('./productModel')
require('./orderModel')
require('./locationModel')
require('./serviceModel')
require('./stylistModel')

const Product = mongoose.model('Product');
const Order = mongoose.model('Order');
const Location = mongoose.model('Location');
const Stylist = mongoose.model('Stylist');
const Service = mongoose.model('Service');
