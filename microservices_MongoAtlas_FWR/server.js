const express = require('express');
const app = express();
const connectDB = require('./DBConnection/Connection');

connectDB();
app.use(express.json({extended: false}));
// para pruebas solamente
app.use('/api/userModel', require('./Api/User'));
app.enable('trust proxy');
app.use('/api/cmmdFRW', require('./Api/CommandFRW'));


const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("server started"));
