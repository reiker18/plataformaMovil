const { Schema, model } = require('mongoose');

const LogsSchema = new Schema({
	ip_origin: String,
	command: String,
	date: String
});

module.exports = model('Logs', LogsSchema);