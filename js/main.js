'use strict'
$(document).ready(function(){
	
	var questOrder = $("input[name='questionOrder']:checked").val();
	$("input[name='questionOrderHidden']").val(questOrder);
	$("input[name='questionOrder']").change(function () {
		var temp = $("input[name='questionOrder']:checked").val();
		$("input[name='questionOrderHidden']").val(temp);
	});
	var getQuestionOrder = function(){
		return $("input[name='questionOrderHidden']").val();
	};

	//---------------------------
	$('#elementary_csharp').click(function(){
		clickHelper(elementary_csharp, 'Elementary C#', getQuestionOrder());
	});
	$('#linq_1').click(function(){
		clickHelper(linq_1, 'LINQ 1', getQuestionOrder());
	});
	$('#linq_tasks').click(function(){
		clickHelper(linq_tasks, 'LINQ tasks', getQuestionOrder());
	});
	//---------------------------
	$('#sql_1').click(function(){
		clickHelper(sql_1, 'SQL 1', getQuestionOrder());
	});
	$('#sql_2').click(function(){
		clickHelper(sql_2, 'SQL 2', getQuestionOrder());
	});
	$('#sql_tasks').click(function(){
		clickHelper(sql_tasks, 'SQL tasks', getQuestionOrder());
	});
	$('#sql_db_1').click(function(){
		clickHelper(sql_db_1, 'SQL DB 1', getQuestionOrder());
	});
	$('#sql_db_2').click(function(){
		clickHelper(sql_db_2, 'SQL DB 2', getQuestionOrder());
	});
	//---------------------------
	$('#solid_1').click(function(){
		clickHelper(solid_1, 'SOLID', getQuestionOrder());
	});
	$('#utest_1').click(function(){
		clickHelper(utest_1, 'UTests', getQuestionOrder());
	});
	$('#cmd').click(function(){
		clickHelper(cmd, 'cmd', getQuestionOrder());
	});
	$('#npm').click(function(){
		clickHelper(npm, 'npm', getQuestionOrder());
	});
	$('#Bower').click(function(){
		clickHelper(Bower, 'Bower', getQuestionOrder());
	});
	$('#OWIN').click(function(){
		clickHelper(OWIN, 'OWIN', getQuestionOrder());
	});
	$('#webpack').click(function(){
		clickHelper(webpack, 'webpack', getQuestionOrder());
	});
	$('#swagger').click(function(){
		clickHelper(swagger, 'swagger', getQuestionOrder());
	});
	$('#REST').click(function(){
		clickHelper(REST, 'REST', getQuestionOrder());
	});
	$('#WebApi').click(function(){
		clickHelper(WebApi, 'WebApi', getQuestionOrder());
	});
	//---------------------------
	$('#js_1').click(function(){
		clickHelper(js_1, 'JS 1', getQuestionOrder());
	});
	$('#angular_1').click(function(){
		clickHelper(angular_1, 'Angular 1', getQuestionOrder());
	});
	//---------------------------
	
	var clickHelper = function(dbName, topicName, questionOrder){
		$('.toRemove').remove();
		createNewDoc(topicName);
		startTraining(dbName, questionOrder);
		$('.nextTask').css('visibility','visible');
	};
	//-----------------------------------------------------
		var createNewDoc = function(topicName){		
			$('body').prepend(function(indx, x){
				var footer = `
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<p class="text-right">` + topicName + `</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 quiz">
								<p id='question'></p>
								<textarea id="challenge" class="form-control" rows="21" ></textarea>
							</div>
							<div class="col-md-6 answer">
								<button class="btn btn-default btn-xs showSolution">Solution</button>
								<textarea id="solution" class="form-control hidden" rows="25"></textarea>
							</div>
						</div>		
					</div>
				`;

					 // <button class="btn btn-default btn-xs" id="taskOrderCoherently"> Ask coherently </button>
					 // <button class="btn btn-default btn-xs" id="taskOrderRandomly"> Ask randomly </button>
				return footer;
			});
		};
	//-----------------------------------------------------
		var startTraining = function(tasks, questionOrder){

			var task_number_counter = 0;
			$('.nextTask').click({n: task_number_counter, t: tasks}, setNextTask);
			$('.nextTask').click();
			
			console.log(questionOrder);/////////////////
		};
	//----------------------------------------------------------------------------

			var setNextTask = function(event){

				var tasks = event.data.t;
				var task_number = event.data.n++ % tasks.length;

				$('.showSolution').text('Solution');
				$('#challenge').val('');

								//-----------------------------------
								// change to show solution-----------
								// $('#solution').html(tasks[task_number].solution)/////////////////
								//			  .removeClass('hidden')
								// 			  .addClass('show');
								$('#solution').removeClass('show')
								 			   .addClass('hidden');		
								//-----------------------------------		

				$('#question').html(tasks[task_number].task);

				var flag = false;
				$('.showSolution').click(function(){		
					if(flag){
						$(this).text('Solution');
						$('#solution').removeClass('show')
									  .addClass('hidden');
					}
					else{
						$(this).text('Hide');
						$('#solution').html(tasks[task_number].solution)
									  .removeClass('hidden')
									  .addClass('show');
					}
					
					(flag) ? flag = false : flag = true;
				});

			};



});