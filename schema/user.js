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
	}
});

module.exports = mongoose.model('User', UserSchema);
