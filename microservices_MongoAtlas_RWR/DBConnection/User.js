const mongoose = require('mongoose');

const rightward = new mongoose.Schema({
    command:{
        type: String,
        //"default": "arriba"
    },
    date:{
        type: String
    },
    ip_origin:{
        type: String,
        "default": "127.0.0.1"
    }
})

module.exports = Rightward = mongoose.model('rightward', rightward);