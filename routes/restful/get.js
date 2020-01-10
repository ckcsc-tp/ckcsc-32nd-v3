const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {title: 'GET'});
});

///// use /////

router.use('/login', require('../login/login.js'));

///// get user /////

function user(req, res){
	var index = req.params.id;
	if(index in user.data){
		res.send(user.data[index]);
	}else{
		res.send({error: 'user id not found'});
	}
};

function allUser(req, res){
	res.send(user.data);
}

user.data = require('./api/user-data.js');

router.get('/user', allUser);
router.get('/user/:id', user);

///// get announces /////

router.use('/anno', require('./api/announce.js'));

module.exports = router;
