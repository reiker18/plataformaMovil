const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    
    // cors = habilitos las direcciones que van a acceder al servidor
    cors: {
        origin: "http://localhost:3000",
        origin: "http://localhost:3001",
        origin: "http://localhost:3002",
        origin: "http://localhost:3003",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    },
});

const connectDB = require('./DBConnection/Connection');
const express = require('express');

const logs = require('./Api/Command');



connectDB();
app.use(express.json({extended: false}));

app.enable('trust proxy');


io.on('connection', (socket) => {
    console.log('microservice conectado');

    socket.on('message', msg => {
        console.log(msg);

        logs(msg);

    });

    socket.on('disconnect', (msg) => {
        console.log('microservice disconected');
    })
});

http.listen(3009, () => {
    console.log('listening on *:3009');
});

