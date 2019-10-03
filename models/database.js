const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@database-uyoe8.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true} , (err )=>{
    if(!err){
        console.log('Connect Database Success');
        
    }else{
        console.log('Connect Database Fail');
    }
})

require('./scheduleModel')
