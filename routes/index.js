var express = require('express');
var router = express.Router();

var root = {
	root: 'public',
	index: 'index.html',
	nameCard: 'nameCard.html'
};

var handout = {
	root: 'public/handout',
	apcs: 'apcs.html',
	c: 'c.html',
	python: 'python.html',
	javascript: 'javascript.html'
}

/* GET home page. */
router.get('/:page', function(req, res, next) {
	var options = {
		root: path.join(__dirname, root.root),
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}
	
	var fileName = req.params.page;
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
		}
	});
});

router.get('/handout/:page', function(req, res, next) {
	var options = {
		root: path.join(__dirname, handout.root),
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}
	
	var fileName = req.params.page;
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
		}
	});
});

module.exports = router;
