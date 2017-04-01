'use strict'	  
var linq_1 = 
[
	{	
		task : "1. Выбрать из массива строки, начинающиеся на букву \"F\" и отсортировать полученный список.<br /><br />"+
			"List&ltstring&gt list = new List&ltstring&gt();<br />"+
            "list.AddRange(new string[] { \"Asya\", \"Fedya\", \"Nikolay\", \"Anna\", \"Frosya\" });", 			
		
		solution : "var x = from n in list\n"+
			"\twhere n.StartsWith(\"F\")\n"+
			"\torderby n\n"+
			"\tselect n;\n\n"+
			"var x = list.Where(n => n.StartsWith(\"F\"))\n"+
			"\t.OrderBy(n => n);"
	},
	{	
		task : "2. Посчитать строки, начинающиеся на букву \"A\", cочетая оба стиля.<br /><br />\n"+
			"List&ltstring&gt list = new List &ltstring&gt ();<br />\n"+
            "list.AddRange(new string[] { \"Asya\", \"Fedya\", \"Nikolay\", \"Anna\", \"Frosya\" });",

		solution : "int x = (from n in list\n"+
			"\twhere n.StartsWith(\"A\")\n"+
			"\tselect n)\n"+
			"\t.Count());"
	}
];