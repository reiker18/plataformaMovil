const mongoose = require('mongoose');

const leftward = new mongoose.Schema({
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

module.exports = Leftward = mongoose.model('leftward', leftward);