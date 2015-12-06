var taskId = 1;

function buildTask(task, $placeholder) {
	var $taskPlaceholder = $("<div></div>");
	var $done = $("<input type='checkbox'></input>");
	var $text = $("<span class = 'taskText'></span>");
	var $edit = $("<button>Edit</button>");
	var $delete = $("<button>Delete</button>");
	$done.prop('checked', task.done);
	$text.text(task.text);
	$edit.click(function(){
		var id = $(this).parent().attr('data-task-id');
		var newText = prompt("Enter new task text");
		if(newText) {
			$(this).parent().find(".taskText").text(newText);	
		}
	});
	$delete.click(function(){
		$(this).parent().remove();
	});
	$taskPlaceholder.append($done).append($text).append($edit).append($delete);
	$taskPlaceholder.attr('data-task-id', task.id);
	$placeholder.append($taskPlaceholder);
};

function buildTasks(tasks, $placeholder) {
	if($placeholder) {
		$placeholder[0].innerHTML = "";
	} else {
		$placeholder = $("<div></div>");
	}
	for(var i = 0; i<tasks.length; ++i) {
		buildTask(tasks[i], $placeholder);
	}
	return $placeholder;
};



function addTask(tasks, text) {
	var task = {id: taskId++, text: text, checked: false};
	tasks.push(task);
	return task;
};

$(function(){
		var someTasks = [{id: taskId++, text: 'Task', done: false}, {id: taskId++, text: 'Some', done: true}];
		var $addButton = $('<button>Add button</button>');
		var $tasksPlaceholder = buildTasks(someTasks);
		$addButton.click(function(){
			var task = addTask(someTasks, prompt("Enter new task"));
			buildTask(task, $tasksPlaceholder);
		});
		$('#tasks').append($addButton);
		$('#tasks').append($tasksPlaceholder);
});