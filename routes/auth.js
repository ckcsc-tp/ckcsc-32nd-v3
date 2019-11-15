const router = require('express').Router();
const mongoose = require('mongoose');
const {UserMoule, registerValidate, loginValidate} = require('../schema/user.js');
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// config env
require('dotenv').config();

//connect to DB

mongoose.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, () => {console.log('DB connected')}
);

// router
router.post('/', (req, res, next) => {
	res.send('auth');
});

router.get('/', (req, res, next) => {
	res.send('auth');
});

router.post('/register', async (req, res, next) => {
	//validate
	const {error} = registerValidate(req.body);
	if(error) return res.status(400).send(error.details[0]);

	// check email doesn't exist
	const emailExist = await UserMoule.findOne({email: req.body.email});
	if(emailExist) return res.status(400).send('email is aleardy used');

	// hash the password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// create user
	const user = new UserMoule({
		name: req.body.name,
		password: hashedPassword,
		email: req.body.email
	})
	await user.save()
		.then((e)=>{
			res.send({uid: user._id});
		})
		.catch((e)=>{
			console.log(e);
			res.status(400).send(e);
		});
});

router.post('/login', async (req, res, next) => {
	//validate
	const {error} = loginValidate(req.body);
	if(error) return res.status(400).send(error.details[0]);

	// check if the email exist
	const user = await UserMoule.findOne({email: req.body.email});
	if(!user) return res.status(400).send('Email is not found');

	// check password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password)
	if(!validPass) return res.status(400).send('Invalid password');

	// create a token
	const token = jwt.sign({_id: user._id}, process.env.TOKEN_SCRETE);
	res.header('auth-token', token).send(token);

	

	res.send('Logged in');
});

module.exports = router;
