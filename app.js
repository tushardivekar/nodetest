var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

var IndexController = require('./IndexController');
app.use('/', IndexController);

module.exports = app;