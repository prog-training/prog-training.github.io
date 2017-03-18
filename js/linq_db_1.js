'use strict'	  
var linq_1 = 
[
	{	
		task : "Выбрать из массива строки, начинающиеся на букву \"F\" и отсортировать полученный список.<br /><br />\n"+
			"List<string> list = new List<string>();<br />\n"+
            "list.AddRange(new string[] { \"Asya\", \"Fedya\", \"Nikolay\", \"Anna\", \"Fan\" });", 			
		
		solution : "var x = from n in list<br />\n"+
			"\twhere n.StartsWith(\"F\")\n"+
			"\torderby n\n"+
			"\tselect n;\n\n"+
			"var x = list.Where(n => n.StartsWith(\"F\")).OrderBy(n => n);"
	},
	{	
		task : 'task2', 
		solution : 'solution2'
	}
];