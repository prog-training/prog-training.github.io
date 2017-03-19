'use strict'
$(document).ready(function(){

	$('#linq_1').click(function(){
		$('.toRemove').remove();
		createNewDoc();
		startTraining(linq_1);
		$('.nextTask').css('visibility','visible');
	});

	$('#utest_1').click(function(){
		$('.toRemove').remove();
		createNewDoc();
		startTraining(utest_1);
		$('.nextTask').css('visibility','visible');
	});

	//-----------------------------------------------------

	var startTraining = function(tasks){


		var task_number = Math.floor(Math.random() * tasks.length);

		$('#question').html(tasks[task_number].task);

		var flag = false;
		$('.showSolution').click(function(){		
			if(flag){
				$('#solution').remove();
				$(this).text('Show Solution');
			}
			else{
				$(this).text('Hide Solution');
				$(this).after(		
					'<textarea id="solution" class="form-control" rows="9" >' + 
					tasks[task_number].solution + 
					'</textarea>'
				);
			}
			
			(flag) ? flag = false : flag = true;
		});

		//tasks.splice(task_number, 1);
	};



	var createNewDoc = function(){		
		$('body').prepend(function(){
			var footer = `
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h2 class="text-center">LINQ to Objects (1)</h2>
							<hr>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 quiz">
							<p id='question'></p>
							<textarea id="challenge" class="form-control" rows="9" ></textarea>
						</div>
						<div class="col-md-6 answer">
							<button class="btn btn-default btn-xs showSolution">Show solution</button>
						</div>
					</div>		
				</div>
			`;
			return footer;
		});
	};



});