var express = require('express');
var router = express.Router();
var userData = require('./api/user-data.js');

router.get('/', (req, res) => {
	res.send(userData);
});

router.get('/:id', (req, res, next) => {
	var index = req.params.id;
	if(index in userData){
		res.send(userData[index]);
	}else{
		res.send({error: 'user id not found'});
	}
});

module.exports = router;
