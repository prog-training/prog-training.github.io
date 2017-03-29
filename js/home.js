'use strict'
$(document).ready(function(){

	$('#linq_1').click(function(){
		clickHelper(linq_1, 'LINQ 1');
	});
	$('#utest_1').click(function(){
		clickHelper(utest_1, 'UTests');
	});
	$('#solid_1').click(function(){
		clickHelper(solid_1, 'SOLID');
	});
	var clickHelper = function(dbName, topicName){
		$('.toRemove').remove();
		createNewDoc(topicName);
		startTraining(dbName);
		$('.nextTask').css('visibility','visible');
	};
	//-----------------------------------------------------
		var createNewDoc = function(topicName){		
			$('body').prepend(function(indx, x){
				var footer = `
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<h2 class="text-center">` + topicName + `</h2>
								<hr>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 quiz">
								<p id='question'></p>
								<textarea id="challenge" class="form-control" rows="21" ></textarea>
							</div>
							<div class="col-md-6 answer">
								<button class="btn btn-default btn-xs showSolution">Show solution</button>
								<textarea id="solution" class="form-control hidden" rows="21"></textarea>
							</div>
						</div>		
					</div>
				`;
				return footer;
			});
		};
	//-----------------------------------------------------
		var startTraining = function(tasks){

			var task_number_counter = 0;
			$('.nextTask').click({n: task_number_counter, t: tasks}, setNextTask);
			$('.nextTask').click();
		};
	//----------------------------------------------------------------------------

			var setNextTask = function(event){

				$('#solution').removeClass('show')
							  .addClass('hidden');

				var tasks = event.data.t;
				var task_number = event.data.n++ % tasks.length;
				
				$('#question').html(tasks[task_number].task);
				// var solution = tasks[task_number].solution ;
				// console.log(task_number + ' ' + solution);

				var flag = false;
				$('.showSolution').click(function(){		
					if(flag){
						$(this).text('Show Solution');
						$('#solution').removeClass('show')
									  .addClass('hidden');
					}
					else{
						$(this).text('Hide Solution');
						$('#solution').html(tasks[task_number].solution)
									  .removeClass('hidden')
									  .addClass('show');
					}
					
					(flag) ? flag = false : flag = true;
				});

			};



});