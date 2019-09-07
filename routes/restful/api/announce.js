const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	var raw = require('./anno-data.js');
	var max = req.query.max || 4;
	var length = raw.length;
	var data = raw.filter((item, index) => index >= length - max);
	res.send(data);
});

module.exports = router;
