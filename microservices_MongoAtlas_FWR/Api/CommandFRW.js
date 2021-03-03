const express = require('express');
const mongoose = require('mongoose');
const User = require('../DBConnection/User');
const route = express.Router();

route.post('/', async(req, res) => {
    //const{command, date, ip_origin} = req.body;
    const{date, ip_origin} = req.body;
    let user = {};
    user.command = "forward";
    user.date = date;
    user.ip_origin = ip_origin;
    let cmmdFRW = new User(user);
  await  cmmdFRW.save();
  res.json(cmmdFRW);
});

module.exports = route;