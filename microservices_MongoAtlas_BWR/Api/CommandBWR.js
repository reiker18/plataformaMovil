const express = require('express');
const mongoose = require('mongoose');
const User = require('../DBConnection/User');
const route = express.Router();

route.post('/', async(req, res) => {
    //const{command, date, ip_origin} = req.body;
    const{date, ip_origin} = req.body;
    let user = {};
    user.command = "backward";
    user.date = date;
    user.ip_origin = ip_origin;
    let cmmdBWR = new User(user);
  await  cmmdBWR.save();
  res.json(cmmdBWR);
});

module.exports = route;