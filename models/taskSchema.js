var mongoose = require('mongoose');

//creating task's Schema
var taskSchema = new mongoose.Schema({
  task: String,
  done: {type: Boolean, default: false }
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;

