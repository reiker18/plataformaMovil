const mongoose = require('mongoose');

const URI = "mongodb+srv://root:sasa@testcluster.hznq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true  });
    console.log('BD conectada');
}

module.exports = connectDB;