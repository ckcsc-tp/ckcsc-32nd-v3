var express = require('express');
var router = express.Router();
var userData = require('./data.js');

router.get('/', (req, res, next) => {
	res.send('api page');
});

router.get('/user/:id', (req, res, next) => {
	var index = req.params.id;
	if(index in userData){
		res.send(userData[index]);
	}else{
		res.send({error: 'user id not found'});
	}
});

router.get('/anno', (req, res, next) => {
	var query = req.query;
	res.send(query);
});

module.exports = router;
