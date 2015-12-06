var express = require('express');
var bodyParser = require('body-parser');
var Task = require(__dirname + '/models/taskSchema');
var handleError = require(__dirname + '/lib/handleServerError');

var taskRouter = module.exports = exports = express.Router();

taskRouter.get('/', function(req, res) {
  Task.find({}, function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);

  });
});

taskRouter.post('/add', bodyParser.json(), function(req, res) {
  var newTask = new Task(req.body);
  newTask.save(function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);
  });
});


taskRouter.put('/edit/:id', bodyParser.json(), function(req, res) {
  var taskData = req.body;
  delete taskData._id;
  Task.update({_id: req.params.id}, taskData, function(err) {
    if (err) return handleError(err, res);
    res.json({msg: 'Task has been edited!'});
  });
});

taskRouter.delete('/delete/:id', function(req, res) {
  Task.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);
    res.json({msg: 'Task has been deleted!'});
  });
});
