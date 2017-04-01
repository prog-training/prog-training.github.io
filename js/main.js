'use strict'
$(document).ready(function(){
	
	$('#elementary_csharp').click(function(){
		clickHelper(elementary_csharp, 'Elementary C#');
	});
	$('#linq_1').click(function(){
		clickHelper(linq_1, 'LINQ 1');
	});
	$('#sql_1').click(function(){
		clickHelper(sql_1, 'SQL 1');
	});
	$('#sql_2').click(function(){
		clickHelper(sql_2, 'SQL 2');
	});
	$('#sql_3').click(function(){
		clickHelper(sql_3, 'SQL 3');
	});
	$('#sql_db').click(function(){
		clickHelper(sql_db, 'SQL DB');
	});

	$('#solid_1').click(function(){
		clickHelper(solid_1, 'SOLID');
	});
	$('#utest_1').click(function(){
		clickHelper(utest_1, 'UTests');
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

					// <button class="btn btn-default btn-xs" id="taskOrderCoherently"> Ask coherently </button>
					// <button class="btn btn-default btn-xs" id="taskOrderRandomly"> Ask randomly </button>
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

				var tasks = event.data.t;
				var task_number = event.data.n++ % tasks.length;

				$('#challenge').val('');

								//-----------------------------------
								// change to show solution-----------
								// $('#solution').html(tasks[task_number].solution)/////////////////
								// 			  .removeClass('hidden')
								// 			  .addClass('show');
								$('#solution').removeClass('show')
											  .addClass('hidden');		
								//-----------------------------------		

				$('#question').html(tasks[task_number].task);

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