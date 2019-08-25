var express = require('express');
var router = express.Router();
var data = require('./data.js');

/* GET users listing. */
router.get('/', function(req, res, next){
	res.send(data);	
});

router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	if(id in data){
		res.send(data[req.params.id]);
	}else{
		res.send({error: 'user data not found'});
	}
});

module.exports = router;
