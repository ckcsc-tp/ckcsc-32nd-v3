var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var clients = [];

router.get('/', (req, res) => {
	res.send('/api/veri');
});

router.get('/new', (req, res) => {
	var veri = crypto.randomBytes(32).toString('hex');
	res.send(veri);
	clients.push(veri)
})

module.exports = router;
