const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const auth = require('./routes/verifyToken.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api.js'));
app.use('/auth', require('./routes/auth.js'));


// echo testing tool

app.post('/echo', (req, res, next) => {
	console.log(req.body);
	res.send(req.body);
});

app.get('/echo', (req, res) => {
	res.send(req.query);
});

app.get('/test', auth, (req, res) => {
	res.send('hi');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	// next(createError(404));
	const options = {
		root: path.join(__dirname, 'public'),
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}	
	res.status(404).sendFile('404.html', options);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
