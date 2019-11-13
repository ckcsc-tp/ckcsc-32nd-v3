const router = require('express').Router();
const mongoose = require('mongoose');

router.post('/register', (req, res, next) => {
	res.send('register');
});

module.exports = router;
