'use strict';

var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.static(__dirname));

var routes = express.Router();
mongoose.connect(process.env.MONGOLAB_URL || 'mongodb://localhost/tasker');

//require('./routes')(routes);
app.use(routes);

app.listen((process.env.PORT || 3000), function() {
  console.log('Server has started on port ' + (process.env.PORT || 3000));
});
