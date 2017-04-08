'use strict'	  
// https://metanit.com/sharp/tutorial/15.1.php
var linq_1 = 
[
	{	
		task : '1. string[] teams = { "Бавария", "Боруссия", "Реал Мадрид", "Манчестер Сити", "ПСЖ", "Барселона" };'+
            '<br/><br/>Выбрать из массива строки, начинающиеся на определенную букву и отсортировать полученный список',

		solution : 'var selectedTeams = '+
		'\n\tfrom t in teams // определяем каждый объект из teams как t'+
        '\n\twhere t.ToUpper().StartsWith("Б") //фильтрация по критерию'+
        '\n\torderby t  // упорядочиваем по возрастанию'+
        '\n\tselect t; // выбираем объект'+ 
    	'\n\nvar selectedTeams = teams.Where(t=>t.ToUpper().StartsWith("Б"))\n\t.OrderBy(t => t);'
	},{	
		task : "2. Выбрать из массива строки, начинающиеся на букву \"F\" и отсортировать полученный список.<br /><br />"+
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
		task : "3. Посчитать строки, начинающиеся на букву \"A\", cочетая оба стиля.<br /><br />\n"+
			"List&ltstring&gt list = new List &ltstring&gt ();<br />\n"+
            "list.AddRange(new string[] { \"Asya\", \"Fedya\", \"Nikolay\", \"Anna\", \"Frosya\" });",

		solution : "int x = (from n in list\n"+
			"\twhere n.StartsWith(\"A\")\n"+
			"\tselect n)\n"+
			"\t.Count();"
	},{	
		task : '4. int[] numbers = { 1, 2, 3, 4, 10, 34, 55, 66, 77, 88 };'+
            '<br/><br/>Выбрать все четные элементы, которые больше 10.',

		solution : 'IEnumerable<int> evens = from i in numbers'+
		'\n\twhere i%2==0 && i>10'+
		'\n\tselect i;'+
		'\n\nIEnumerable<int> evens = numbers.Where(i => i % 2 == 0 && i > 10);'
	},{	
		task : '5. class User'+
		'<br/>{'+
    	'<br/>&nbsp &nbsp		public string Name { get;set; }'+
     	'<br/>&nbsp &nbsp		public int Age { get; set; }'+
    	'<br/>&nbsp &nbsp		public List<string> Languages { get; set; }'+
		'<br/>&nbsp &nbsp		public User()'+
		'<br/>&nbsp &nbsp		{'+
		'<br/>&nbsp &nbsp &nbsp &nbsp			Languages = new List<string>();'+				    
		'<br/>&nbsp &nbsp		}'+
		'<br/>}'+
		'<br/><br/>List<User> users = new List<User>'+
		'<br/>{'+
		'<br/>&nbsp &nbsp    new User {Name="Том", Age=23, Languages = new List<string> {"английский", "немецкий" }},'+
		'<br/>&nbsp &nbsp    new User {Name="Боб", Age=27, Languages = new List<string> {"английский", "французский" }},'+
		'<br/>&nbsp &nbsp    new User {Name="Джон", Age=29, Languages = new List<string> {"английский", "испанский" }},'+
		'<br/> &nbsp &nbsp   new User {Name="Элис", Age=24, Languages = new List<string> {"испанский", "немецкий" }}'+
		'<br/>};'+
		'<br/><br/>1) Выбрать пользователей, которым больше 25 лет.'+
		'<br/>2) Oтфильтровать пользователей по языку ("английский").',

		solution : '1) \nvar selectedUsers = from user in users'+
                    '\n\twhere user.Age > 25'+
                    '\n\tselect user;'+

                    '\n\nvar selectedUsers = users.Where(u=> u.Age > 25);'+

                    '\n\n2)\nvar selectedUsers = from user in users'+
                    '\n\tfrom lang in user.Languages'+
                    '\n\twhere user.Age < 28'+
                    '\n\twhere lang == "английский"'+
                    '\n\tselect user;'+

                    '\n\nvar selectedUsers = users.SelectMany(u => u.Languages,'+
                    '\n\t(u, l) => new { User = u, Lang = l })'+
                    '\n\t.Where(u => u.Lang == "английский" && u.User.Age < 28)'+
                    '\n\t.Select(u=>u.User);'+
                    '\n\nМетод SelectMany() в качестве первого параметра принимает поледовательность, которую надо проецировать, а в качестве второго параметра - функцию преобразования, которая применяется к каждому элементу. На выходе она возвращает 8 пар "пользователь - язык" (new { User = u, Lang = l }), к которым потом применяетс фильтр с помощью Where.'
	},{	
		task : '6. class User'+
		'<br/>{'+
    	'<br/>&nbsp public string Name { get;set; }'+
    	'<br/>&nbsp public int Age { get; set; }'+
		'<br/>}'+
		'<br/><br/>List<User> users = new List<User>();'+
		'<br/>users.Add(new User { Name = "Sam", Age = 43 });'+
		'<br/>users.Add(new User { Name = "Tom", Age = 33 });'+
		'<br/><br/>Cпроектировать из текущего типа выборки другой тип:'+
		'<br/>1) Hапример, нам нужен не весь объект, а только его свойство Name.'+
		'<br/>2) Cоздать объекты анонимного типа.',

		solution : 'Для проекции используется оператор select.'+

		'\n\n1)\n\tvar names = from u in users select u.Name;'+

		'\n\n\tvar names = users.Select(u => u.Name);'+

		'\n\n2)\n\tvar items = from u in users'+
            '\n\tselect new'+
            '\n\t{ '+
            '\n\t\tFirstName = u.Name, '+
            '\n\t\tDateOfBirth = DateTime.Now.Year - u.Age '+
            '\n\t};'+

            '\n\n\tvar items = users.Select(u => new'+
			'\n\t{ '+
    		'\n\t\tFirstName = u.Name, '+
    		'\n\t\tDateOfBirth = DateTime.Now.Year - u.Age '+
			'\n\t});'
	},
	{	
		task : '7. List<User> users = new List<User>()'+
		'<br/>{'+
    	'<br/>&nbsp new User { Name = "Sam", Age = 43 },'+
    	'<br/>&nbsp new User { Name = "Tom", Age = 33 }'+
		'<br/>};'+
		'<br/><br/>Cоздать переменную name = "Mr. " + u.Name; <br/> и создать с ее помощью анонимный класс.',

		solution : 'var people = from u in users'+
             '\nlet name = "Mr. " + u.Name'+
             '\nselect new'+
             '\n{'+
             '\n\t   Name = name,'+
             '\n\t   Age = u.Age'+
             '\n};'+
             '\n\nВозможность определения переменных наверное одно из главных преимуществ операторов LINQ по сравнению с методами расширения.'
	},
	{	
		task : '8. class Phone'+
		'<br/>{'+
    	'<br/>&nbsp public string Name { get; set; }'+
    	'<br/>&nbsp public string Company { get; set; }'+
		'<br/>}'+
		'<br/>class User'+
		'<br/>{'+
    	'<br/>&nbsp public string Name { get; set; }'+
    	'<br/>&nbsp public int Age { get; set; }'+
		'<br/>}'+
		'<br/><br/>Создадим два разных источника данных'+
		'<br/>List<User> users = new List<User>()'+
		'<br/>{'+
    	'<br/>&nbsp new User { Name = "Sam", Age = 43 },'+
    	'<br/>&nbsp new User { Name = "Tom", Age = 33 }'+
		'<br/>};'+
		'<br/>List<Phone> phones = new List<Phone>()'+
		'<br/>{'+
    	'<br/>&nbsp new Phone {Name="Lumia 630", Company="Microsoft" },'+
    	'<br/>&nbsp new Phone {Name="iPhone 6", Company="Apple"},'+
		'<br/>};'+
		'<br/><br/>Произвести выборку из двух источников.',

		solution : 'var people = from user in users'+
             '\n\tfrom phone in phones'+
             '\n\tselect new { Name = user.Name, Phone = phone.Name };'+
             '\n\nТаким образом, при выборке из двух источников каждый элемент из первого источника будет сопоставляться с каждым элементом из второго источника. То есть получиться 4 пары.'
	},
	{	
		task : '9. Отсортировать набор данных по возрастанию.'+
		'<br/><br/>int[] numbers = { 3, 12, 4, 10, 34, 20, 55, -66, 77, 88, 4 };',

		solution : 
		'var orderedNumbers = from i in numbers'+
                     '\n\torderby i'+
                     '\n\tselect i;'
	},
	{	
		task : '10. Отсортировать Юзеров по именам.'+
		'<br/><br/>List<User> users = new List<User>()'+
		'<br/>{'+
		'<br/> &nbsp&nbsp   new User { Name = "Tom", Age = 33 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Bob", Age = 30 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Tom", Age = 21 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Sam", Age = 43 }'+
		'};',

		solution : 'var sortedUsers = from u in users'+
                  '\n\torderby u.Name'+
                  '\n\tselect u;'+
                  '\n\nvar sortedUsers = users.OrderBy(u=>u.Name);'
	},
	{	
		task : '11. Отсортировать Юзеров по именам по убыванию.'+
		'<br/><br/>List<User> users = new List<User>()'+
		'<br/>{'+
		'<br/> &nbsp&nbsp   new User { Name = "Tom", Age = 33 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Bob", Age = 30 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Tom", Age = 21 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Sam", Age = 43 }'+
		'};',

		solution : 'var sortedUsers = from u in users'+
                  '\n\torderby u.Name descending'+
                  '\n\tselect u;'+
                  '\n\nvar sortedUsers = users.OrderByDescending(u=>u.Name);'
	},
	{	
		task : '12. Отсортировать Юзеров по именам, затем по возрасту, затем по длине имени.'+
		'<br/><br/>List<User> users = new List<User>()'+
		'<br/>{'+
		'<br/> &nbsp&nbsp   new User { Name = "Tom", Age = 33 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Bob", Age = 30 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Tom", Age = 21 },'+
		'<br/> &nbsp&nbsp   new User { Name = "Sam", Age = 43 }'+
		'};',

		solution : 'var sortedUsers = from u in users'+
                  '\n\torderby user.Name, user.Age, user.Name.Length'+
                  '\n\tselect u;'+
                  '\n\nvar result = users.OrderBy(u => u.Name)\n\t.ThenBy(u => u.Age)\n\t.ThenBy(u=>u.Name.Length);'
	},
	{	
		task : '13. Получить разность двух множеств.'+
		'<br/><br/>string[] soft = { "Microsoft", "Google", "Apple"};'+
		'<br/>string[] hard = { "Apple", "IBM", "Samsung"};',

		solution : 'var result = soft.Except(hard);'
	},
	{	
		task : '14. Получить пересечение двух множеств.'+
		'<br/><br/>string[] soft = { "Microsoft", "Google", "Apple"};'+
		'<br/>string[] hard = { "Apple", "IBM", "Samsung"};',

		solution : 'var result = soft.Intersect(hard);'
	},
	{	
		task : '15. Получить объединенияе двух множеств'+
		'<br/><br/>string[] soft = { "Microsoft", "Google", "Apple"};'+
		'<br/>string[] hard = { "Apple", "IBM", "Samsung"};',

		solution : 'var result = soft.Union(hard);'+
		'\n\nДля объединения двух множеств используется метод Union. Его результатом является новый набор, в котором имеются элементы, как из одного, так и из второго множества. Повторяющиеся элементы добавляются в результат только один раз'
	},
	{	
		task : '16. Получить простое объединение двух наборов'+
		'<br/><br/>string[] soft = { "Microsoft", "Google", "Apple"};'+
		'<br/>string[] hard = { "Apple", "IBM", "Samsung"};',

		solution : 'var result = soft.Concat(hard);'+
		'\n\nТе элементы, которые встречаются в обоих наборах, дублируются.'
	},
	{	
		task : '17. Удалить дубли в наборе.',

		solution : 'var result = soft.Concat(hard).Distinct();'+
		'\n\nПоследовательное применение методов Concat и Distinct будет подобно действию метода Union.'
	},
	{	
		task : '',

		solution : ''
	},
	{	
		task : '',

		solution : ''
	},
	{	
		task : '',

		solution : ''
	}
];