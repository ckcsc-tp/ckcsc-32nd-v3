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
	var anno = require('./anno.js');
	var query = req.query;
	var preset = require('./config.js').anno;
	for(var i in preset){
		if(!(i in query)){
			query[i] = preset[i];
		}
	}
	var re = anno.filter((item, index) => index < query.max);
	res.send(re);
});

module.exports = router;
