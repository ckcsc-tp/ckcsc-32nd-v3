const express = require('express');
const router = express.Router();

router.use('/GET', require('./restful/get.js'));
router.use('/POST', require('./restful/post.js'));
router.use('/PATCH', require('./restful/patch.js'));
router.use('/DELETE', require('./restful/delete.js'));

router.get('/', (req, res) => {
	res.render('index', {title: 'API'});
});

module.exports = router;
