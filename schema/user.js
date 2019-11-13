const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		min: 6,
		max: 225,
		required: true 
	},
	password: {
		type: String,
		min: 10,
		max: 1024,
		required: true 
	},
	email: {
		type: String,
		min: 6,
		max: 225,
		required: true 
	},
	homepage: String,
	realname: {
		type: String,
		min: 2,
		required: true 
	},
	school: Number,
	grade: Number
});

module.exports = mongoose.module('User', UserSchema);
