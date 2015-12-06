var mongoose = require('mongoose');

//creating task's Schema
var taskSchema = new mongoose.Schema({
  task: String,
  done: Boolean
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;

