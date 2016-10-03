var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
var morgan = require('morgan'); 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override');


app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use(methodOverride());

routes = require('./routes/hospital')(app);
// MongoDB configuration 

// catch 404 and forward to error handler
app.listen(8080);
console.log('Im listening on port 8080');



module.exports = app;
