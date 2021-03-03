const express = require('express');
const mongoose = require('mongoose');
const User = require('../DBConnection/test');
const route = express.Router();

route.post('/', async(req, res) => {
    const{firstName} = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = req.headers['x-forwarded-for'] || req.connection.remoteAddress;;
    let userModel = new User(user);
  await  userModel.save();
  res.json(userModel);
});

module.exports = route;