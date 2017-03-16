'use strict'
$(document).ready(function(){	  
	  	
	var rate_number = 0; var question_number = 0;///////////
	
	$('#question').html(questions[rate_number][question_number].q);
	
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
				questions[rate_number][question_number].a + 
				'</textarea>'
			);
		}
		
		(flag) ? flag = false : flag = true;
	});	
});