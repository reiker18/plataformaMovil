const express = require('express');
const mongoose = require('mongoose');
const Logs = require('../DBConnection/Logs');


async function logs(other) {

  let user = {};

  user.command = other.command;
  user.date = other.date;
  user.ip_origin = other.ip_origin;
  let cmmdBWR = new Logs(user);

  await cmmdBWR.save();
}

module.exports = logs;