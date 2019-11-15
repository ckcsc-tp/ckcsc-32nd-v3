const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../schema/user.js');

// config env
require('dotenv').config();

//connect to DB

mongoose.connect(process.env.DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, () => {console.log('DB connected')});

// router
router.post('/', (req, res, next) => {
	res.send('auth');
});

router.get('/', (req, res, next) => {
	res.send('auth');
});

router.post('/register', async (req, res, next) => {
	var user = new User({
		name: req.body.name,
		password: req.body.password,
		email: req.body.email
	})
	await user.save()
		.catch((e)=>{
			console.log(e);
			res.send(e);
		});
	res.send('register');
});

module.exports = router;
