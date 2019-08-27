var express = require('express');
var router = express.Router();
var preset = require('./api/config.js').anno;
var anno = require('./api/anno-data.js');

router.get('/', (req, res, next) => {
	var query = req.query;
	for(var i in preset){
		if(!(i in query)){
			query[i] = preset[i];
		}
	}
	var re = anno.filter((item, index) => index < query.max);
	res.send(re);
});

module.exports = router;
