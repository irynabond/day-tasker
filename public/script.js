/* global $ */
function buildTask(task, $placeholder) {
	var $taskPlaceholder = $("<div></div>");
	var $done = $("<input type='checkbox'></input>");
	var $text = $("<span class = 'taskText'></span>");
	var $edit = $("<button>Edit</button>");
	var $delete = $("<button>Delete</button>");
	$done.prop('checked', task.done);
	$text.text(task.task);
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



function addTask(tasks, text, $tasksPlaceholder) {
	$.ajax({
		type: 'POST',
		data: JSON.stringify({task: text}),
		contentType: "application/json; charset=utf-8",
		url: window.location.origin + '/add',
		success: function(id){
			var task = {id: id, task: text, done: false};
			buildTask(task, $tasksPlaceholder);
		},
	});
};

$(function(){
	$.ajax({
		url: window.location.origin + '/data',
		success: function(tasks) {
			var $addButton = $('<button>Add task</button>');
			var $tasksPlaceholder = buildTasks(tasks);
			$addButton.click(function(){
				addTask(tasks, prompt("Enter new task"), $tasksPlaceholder);
			});
			$('#tasks').append($addButton);
			$('#tasks').append($tasksPlaceholder);
		}
	});
});