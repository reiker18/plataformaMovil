const mongoose = require('mongoose');

const test = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    }
})

module.exports = Test = mongoose.model('test', test);