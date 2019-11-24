const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

var register = Joi.object({
	name: Joi
		.string()
		.min(3)
		.required(),
	password: Joi
		.string()
		.min(10)
		.required(),
	email: Joi
		.string()
		.min(6)
		.required()
		.email()
});

var login = Joi.object({
	email: Joi
		.string()
		.min(6)
		.required()
		.email(),
	password: Joi
		.string()
		.min(10)
		.required()
});

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		min: 3,
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
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = {
	UserMoule: mongoose.model('User', UserSchema),
	registerValidate: (body) => register.validate(body),
	loginValidate: (body) => login.validate(body)
}
