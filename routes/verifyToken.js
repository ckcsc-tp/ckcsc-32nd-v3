const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next){
	const token = req.header('auth-token');
	if(!token) return res.status(401).send('Access Denied');

	// verify token
	try{
		const verified = jwt.verify(token, process.env.TOKEN_SCRETE);
		req.user = verified;
	}catch(e){
		return res.status(401).send('Invalid Token');
	}
	next();
}

module.exports = auth;
