const express = require('express');
const app = express();
app.use(express.json({extended: false}));


const io = require('socket.io-client');
// http://localhost:3009 => direccion del servidor al cual me quiero conectar
const socket = io("http://localhost:3009");

app.enable('trust proxy');

const Port = process.env.Port || 3010;

app.listen(Port, () => console.log("server started"));

socket.on("connect", () => {
    console.log(socket.connected); // true
});

socket.on("Connect_failed", () => {
  console.log(socket.connected);
});

socket.on('respuesta', (respuesta) => {
    console.log(respuesta);
});

socket.on('announcements', (msg) =>{
  console.log(msg);
}); 