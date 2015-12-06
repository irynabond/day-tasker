function buildTasks(tasks, placeholder) {
	var tasksPlaceholder = document.createElement("div");
	for(var i = 0; i<tasks.length; ++i) {
		buildTask(tasks[i], tasksPlaceholder);
	}
	placeholder.appendChild(tasksPlaceholder);
}

function buildTask(task, placeholder) {
	var $taskPlaceholder = $("<div></div>");
	var $done = $("<input type='checkbox'></input>");
	var $text = $("<span></span>");
	$done.prop('checked', task.done);
	$text.text(task.text);
	
	$taskPlaceholder.append($done).append($text);
	placeholder.appendChild($taskPlaceholder[0]);
}

$(function(){
		var someTasks = [{id: 1, text: 'Task', done: false}, {id: 2, text: 'Some', done: true}];
		buildTasks(someTasks, $('#tasks')[0]);
});