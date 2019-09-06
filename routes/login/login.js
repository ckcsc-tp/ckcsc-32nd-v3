const express = require('express');
const router = express.Router();

const user = require('./user-data.json');

router.use('/', (req, res, next) => {
	if(user.some((x) => x.name === req.body.username)){
		next();
	}
});

router.post('/', (req, res) => {
	var username = req.body.username;
	if(user[username].password == req.body.password){
		res.status(200).send('success');
		console.log(`${username} login`);
	}else{
		console.log(`${username} password error`);
	}
	console.table(req.body);
});

module.exports = router;
