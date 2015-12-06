var mongoose = require('mongoose');
var express = require('express');
var app = express();
var taskRouter = require(__dirname + '/routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/task');

app.use(taskRouter);
app.use(express.static(__dirname + '/public'));

app.listen((process.env.PORT || 3000), function() {
  console.log('Server has started on port ' + (process.env.PORT || 3000));
});
