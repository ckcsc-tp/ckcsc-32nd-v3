var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
	res.send([
		'anno',
		'intro'
	]);
});

router.post('/anno', (req, res) => {
	var data = req.body;
	
});

router.post('/intro', (req, res) => {

});

module.exports = router;
