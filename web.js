var gzippo = require('gzippo'),
	express = require('express'),
	logger = require('morgan');

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

var app = express();

app.use(logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.listen(port);

//console.log('Server running on port: %s', port);