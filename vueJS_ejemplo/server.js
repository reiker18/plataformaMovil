const express = require('express');
const app = express();

app.use(express.json({extended: false}));


const Port = process.env.Port || 3010;

app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\MANUEL\\Desktop\\Sistemas digitales y ensambladores\\plataformaMovil\\vueJS_ejemplo\\index.html');
});


app.listen(Port, (req, res) =>{
    console.log("server started")
});
