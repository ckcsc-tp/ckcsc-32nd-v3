const express = require('express');
const router = express.Router();

const user = require('./user-data.json');

router.post('/', (req, res) => {
	// console.log(`${req.body.username}: \n${req.body.password}`);
	// res.send(req.body);
	
	console.log('/api/GET/login');
	console.table(req.body);
	var username = req.body.username;
	if(username in user){
		if(user[username].password === req.body.password){
			console.log(`${username} login`);
			res.send('login');
		}else{
			console.log(`${username} password error`);
			res.send('password error');
		}
	}else{
		console.log('user not found');
		res.send('user not found');
	}
	
});

module.exports = router;
