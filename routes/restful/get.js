const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {title: 'GET'});
});

///// ues /////

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

function anno(req, res){
	var query = req.query;
	for(var i in anno.preset){
		if(!(i in query)){
			query[i] = anno.preset[i];
		}
	}
	var re = anno.data.filter((item, index) => index < query.max);
	res.send(re);
};

anno.preset = require('./api/config.js').anno;
anno.data = require('./api/anno-data.js');

router.get('/anno', anno);

module.exports = router;
