const express = require('express');
const app = express();
const connectDB = require('./DBConnection/Connection');

connectDB();
app.use(express.json({extended: false}));
// para pruebas solamente
app.use('/api/userModel', require('./Api/User'));
app.enable('trust proxy');
app.use('/api/cmmdLWR', require('./Api/CommandLWR'));


const Port = process.env.Port || 3002;

app.listen(Port, () => console.log("server started"));
