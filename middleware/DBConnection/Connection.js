const mongoose = require('mongoose');
//const mongo = require('mongodb').MongoClient;


const URI = "mongodb+srv://root:sasa@testcluster.hznq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/*let stream = undefined;
mongo.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
  
  console.log("Connected to MongoDB server");
 
  // Select DB and Collection
  const db = client.db("myFirstDatabase")
  const collection = db.collection("logs");
  pipeline = [
    // filters
    //{
     //$match: { "fullDocument.price": { $gte: 250 } }
   //}
  ];
  // Define change stream
  const changeStream = collection.watch(pipeline);
  // start listen to changes
  changeStream.on("change", function(event) {
    switch (event.operationType) {
      case "insert":

        stream = {

        ip_origen: event.fullDocument.ip_origin,
        comando: event.fullDocument.command,
        fecha: event.fullDocument.date
      }
      break;
      
      case "delete":
        console.log("se elimino algo");
      break
    }
  });
});*/

//conexion original
const connectDB = async() => {
    await mongoose.connect(URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true  
    });
    console.log('BD conectada');    
}

module.exports = URI;
module.exports = connectDB;
