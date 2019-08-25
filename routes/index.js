var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.send('hoem page');
});

module.exports = router;
