'use strict'
	  
var rate_0 = 
[
	{	
		q : "Выбрть из массива строки, начинающиеся на букву \"F\" и отсортировать полученный список.<br /><br />\\n"+
			"List<string> list = new List<string>();<br />\\n"+
            "list.AddRange(new string[] { \"Asya\", \"Fedya\", \"Nikolay\", \"Anna\", \"Fan\" });", 			
		
		a : "var x = from n in list<br />\n"+
			"		 where n.StartsWith(\"F\")\n"+
			"		 orderby n\n"+
			"		 select n;\n\n"+
			"var x = list.Where(n => n.StartsWith(\"F\")).OrderBy(n => n);"
	},
	{	
		q : 'question2', 
		a : 'answer2'
	}
];	

var questions = [];  questions.push(rate_0);
	 