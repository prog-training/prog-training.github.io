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
                     '\n\tselect i;'+
                     '\n\nIEnumerable<int> sortedNumbers = numbers.OrderBy(i=>i);'
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
		'\n\nДля объединения двух множеств используется метод Union. Его результатом является новый набор, в котором имеются элементы, как из одного, так и из второго множества. Повторяющиеся элементы добавляются в результат только один раз.'
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
		task : '18. Выполнить общую агрегацию элементов коллекции в зависимости от указанного выражения. Например, вычитание.'+
		'<br/><br/>int[] numbers = { 1, 2, 3, 4, 5};',

		solution : 'int query = numbers.Aggregate((x,y)=> x - y);'+
		'\n\nвначале из первого элемента вычитается второй, потом из получившегося значения вычитается третий и так далее. То есть юудет эквивалентно выражению:'+
		'\n\nint query = 1 - 2 - 3 - 4 - 5'+
		'\n\nВ итоге мы получим число -13.'
	},
	{	
		task : '19. Получить число элементов в выборке.'+
		'<br/><br/>int[] numbers = { 1, 2, 3, 4, 10, 34, 55, 66, 77, 88 };',

		solution : 'int size = (from i in numbers \n\twhere i % 2 == 0 && i > 10 \n\tselect i).Count();'+
		'\n\nМетод Count() в одной из версий также может принимать лямбда-выражение, которое устанавливает условие выборки. Поэтому мы можем в данном случае не использовать выражение Where:'+
		'\n\nint size = numbers.Count(i => i % 2 == 0 && i > 10);'
	},
	{	
		task : '20. Получить суммы значений.'+
		'<br/><br/>int[] numbers = { 1, 2, 3, 4, 10, 34, 55, 66, 77, 88 };'+
		'<br/><br/>List<User> users = new List<User>()'+
		'<br/>{'+
		'<br/> &nbsp   new User { Name = "Tom", Age = 23 },'+
		'<br/> &nbsp   new User { Name = "Sam", Age = 43 },'+
		'<br/> &nbsp   new User { Name = "Bill", Age = 35 }'+
		'<br/>};',

		solution : 'int sum1 = numbers.Sum();'+
		'\n\ndecimal sum2 = users.Sum(n => n.Age);'+
		'\n\nМетод Sum() имеет ряд перегрузок. В частности, если у нас набор сложных объектов, как в примере выше, то мы можем указать свойство, значения которого будут суммироваться: users.Sum(n => n.Age).'
	},
	{	
		task : '21. Найти минимальное, максимальное и среднее значения.'+
		'<br/><br/>int[] numbers = { 1, 2, 3, 4, 10, 34, 55, 66, 77, 88 };'+
		'<br/><br/>List<User> users = new List<User>()'+
		'<br/>{'+
		'<br/> &nbsp   new User { Name = "Tom", Age = 23 },'+
		'<br/> &nbsp   new User { Name = "Sam", Age = 43 },'+
		'<br/> &nbsp   new User { Name = "Bill", Age = 35 }'+
		'<br/>};',

		solution : 'int min1 = numbers.Min();'+
		'\nint min2 = users.Min(n => n.Age);'+
		 
		'\n\nint max1 = numbers.Max();'+
		'\nint max2 = users.Max(n => n.Age);'+
		 
		'\n\ndouble avr1 = numbers.Average();'+
		'\ndouble avr2 = users.Average(n => n.Age); '
	},
	{	
		task : '22. Извлечь три первых элемента.'+
		'<br/><br/>int[] numbers = { -3, -2, -1, 0, 1, 2, 3 };',

		solution : 'var result = numbers.Take(3);'
	},
	{	
		task : '23. Выбрать все элементы, кроме первых трех'+
		'<br/><br/>int[] numbers = { -3, -2, -1, 0, 1, 2, 3 };',

		solution : 'var result = numbers.Skip(3);'
	},
	{	
		task : '24. Выбрать три элемента, начиная с пятого (то есть пропустив четыре элемента)'+
		'<br/><br/>int[] numbers = { -3, -2, -1, 0, 1, 2, 3 };',

		solution : 'var result = numbers.Skip(4).Take(3);'
	},
	{	
		task : '25.  Выбрать цепочку элементов, начиная с первого элемента, пока они удовлетворяют определенному условию.'+
		'<br/><br/>string[] teams = { "Бавария", "Боруссия", "Реал Мадрид", "Манчестер Сити", "ПСЖ", "Барселона" };'+
		'<br/><br/>Печатать пока команды начинаются с буквы "Б".',

		solution : 'foreach (var t in teams.TakeWhile(x=>x.StartsWith("Б")))'+
    	'\nConsole.WriteLine(t);'+
    	'\n\nБавария'+
		'\nБоруссия'
	},
	{	
		task : '26. Пропустить печать цепочки элементов, начиная с первого элемента, пока они удовлетворяют определенному условию.'+
		'<br/><br/>string[] teams = { "Бавария", "Боруссия", "Реал Мадрид", "Манчестер Сити", "ПСЖ", "Барселона" };'+
		'<br/><br/>Не печатать пока команды начинаются с буквы "Б".',

		solution : 'foreach (var t in teams.SkipWhile(x=>x.StartsWith("Б")))'+
    	'\nConsole.WriteLine(t);'+
		'\n\nРеал Мадрид'+
		'\nМанчестер Сити'+
		'\nПСЖ'+
		'\nБарселона'
	},
	{	
		task : '27. class Phone'+
		'<br/>{'+
		'<br/> &nbsp   public string Name { get; set; }'+
		'<br/> &nbsp   public string Company { get; set; }'+
		'<br/>}'+
		
		'<br/><br/>List<Phone> phones = new List<Phone>'+
		'<br/>{'+
		'<br/> &nbsp   new Phone {Name="Lumia 430", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="Mi 5", Company="Xiaomi" },'+
		'<br/> &nbsp   new Phone {Name="LG G 3", Company="LG" },'+
		'<br/> &nbsp   new Phone {Name="iPhone 5", Company="Apple" },'+
		'<br/> &nbsp   new Phone {Name="Lumia 930", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="iPhone 6", Company="Apple" },'+
		'<br/> &nbsp   new Phone {Name="Lumia 630", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="LG G 4", Company="LG" }'+
		'<br/>};'+

		'<br/><br/> Сгруппировать набор телефонов по производителю.',

		solution : 'var phoneGroups = from phone in phones'+
                  '\n\tgroup phone by phone.Company;'+

                  '\n\nforeach (IGrouping<string, Phone> g in phoneGroups)'+
				  '\n{'+
				  '\n &nbsp Console.WriteLine(g.Key);'+
				  '\n &nbsp foreach (var t in g)'+
				  '\n &nbsp&nbsp&nbsp Console.WriteLine(t.Name);'+
				  '\n &nbsp&nbsp&nbsp Console.WriteLine()'+

        '\n\nЕсли в выражении LINQ последним оператором, выполняющим операции над выборкой, является group, то оператор select не применяется.'+
		'\n\nОператор group принимает критерий по которому проводится группировка: group phone by phone.Company - в данном случае группировка по свойству Company.'+
		'\n\nРезультатом оператора group является выборка, которая состоит из групп. Каждая группа представляет объект IGrouping<string, Phone>: параметр string указывает на тип ключа, а параметр Phone - на тип сгруппированных объектов.'+
		'\n\nКаждая группа имеет ключ, который мы можем получить через свойство Key: g.Key'+
		'\n\nВсе элементы группы можно получить с помощью дополнительной итерации. Элементы группы имеют тот же тип, что и тип объектов, которые передавались оператору group, то есть в данном случае объекты типа Phone.'+
		'\n\nВ итоге мы получим следующий вывод:'+

		'\n\nMicrosoft'+
		'\nLumia 430'+
		'\nLumia 930'+
		'\nLumia 630'+

		'\n\nXiaomi'+
		'\nMi 5'+

		'\n\nLG'+
		'\nLG G 3'+
		'\nLG G4'+

		'\n\nApple'+
		'\niPhone 5'+
		'\niPhone 6'+
		'\nАналогичный запрос можно построить с помощью метода расширения GroupBy:'+

		'\n\nvar phoneGroups = phones.GroupBy(p => p.Company);'
	},
	{	
		task : '28. class Phone'+
		'<br/>{'+
		'<br/> &nbsp   public string Name { get; set; }'+
		'<br/> &nbsp   public string Company { get; set; }'+
		'<br/>}'+
		
		'<br/><br/>List<Phone> phones = new List<Phone>'+
		'<br/>{'+
		'<br/> &nbsp   new Phone {Name="Lumia 430", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="Mi 5", Company="Xiaomi" },'+
		'<br/> &nbsp   new Phone {Name="LG G 3", Company="LG" },'+
		'<br/> &nbsp   new Phone {Name="iPhone 5", Company="Apple" },'+
		'<br/> &nbsp   new Phone {Name="Lumia 930", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="iPhone 6", Company="Apple" },'+
		'<br/> &nbsp   new Phone {Name="Lumia 630", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="LG G 4", Company="LG" }'+
		'<br/>};'+

		'<br/><br/> Сгруппировать набор телефонов по производителю и создать из группы новый объект.',

		solution : 'var phoneGroups2 = from phone in phones'+
		                   '\n\tgroup phone by phone.Company into g'+
		                   '\n\tselect new { Name = g.Key, Count = g.Count() };'+
		'\n\nforeach (var group in phoneGroups2)'+
		'\n\t Console.WriteLine("{0} : {1}", group.Name, group.Count);'+
		'\n\nВыражение group phone by phone.Company into g определяет переменную g, которая будет содержать группу. С помощью этой переменной мы можем затем создать новый объект анонимного типа: select new { Name = g.Key, Count = g.Count() } Теперь результат запроса LINQ будет представлять набор объектов таких анонимных типов, у которых два свойства Name и Count.'+
		'\nРезультат программы:'+
		'\n\nMicrosoft : 3'+
		'\nXiaomi : 1'+
		'\nLG : 2'+
		'\nApple : 2' +

		'\n\nАналогичная операция с помощью метода GroupBy():'+
		'\n\nvar phoneGroups = phones.GroupBy(p => p.Company)'+
		'\n\t.Select(g => new { Name = g.Key, Count = g.Count() });'
	},
	{	
		task : '29. class Phone'+
		'<br/>{'+
		'<br/> &nbsp   public string Name { get; set; }'+
		'<br/> &nbsp   public string Company { get; set; }'+
		'<br/>}'+
		
		'<br/><br/>List<Phone> phones = new List<Phone>'+
		'<br/>{'+
		'<br/> &nbsp   new Phone {Name="Lumia 430", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="Mi 5", Company="Xiaomi" },'+
		'<br/> &nbsp   new Phone {Name="LG G 3", Company="LG" },'+
		'<br/> &nbsp   new Phone {Name="iPhone 5", Company="Apple" },'+
		'<br/> &nbsp   new Phone {Name="Lumia 930", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="iPhone 6", Company="Apple" },'+
		'<br/> &nbsp   new Phone {Name="Lumia 630", Company="Microsoft" },'+
		'<br/> &nbsp   new Phone {Name="LG G 4", Company="LG" }'+
		'<br/>};'+

		'<br/><br/> Сгруппировать набор телефонов по производителю, создать из группы новый объект со списком имен телефонов (вложенный запрос).',

		solution : 'var phoneGroups2 = from phone in phones'+
		'\n\t group phone by phone.Company into g'+
		'\n\t select new'+
		'\n\t {'+
		'\n\t\t Name = g.Key,'+
		'\n\t\t Count = g.Count(),'+
		'\n\t\t Phones = from p in g select p'+
		'\n\t };'+
		'\n\nforeach (var group in phoneGroups2)'+
		'\n{'+
		'\n\t Console.WriteLine("{0} : {1}", group.Name, group.Count);'+
		'\n\t foreach(Phone phone in group.Phones)'+
		'\n\t\t Console.WriteLine(phone.Name);'+
		'\n\t\t Console.WriteLine();'+
		'\n}'+
		'\n\nЗдесь свойство Phones каждой группы формируется с помощью дополнительного запроса, выбирающего все телефоны в этой группе.'+
		'\n\nКонсольный вывод программы:'+

		'\n\nMicrosoft : 3'+
		'\nLumia 430'+
		'\nLumia 930'+
		'\nLumia 630'+

		'\n\nXiaomi : 1'+
		'\nMi 5'+

		'\n\nLG : 2'+
		'\nLG G 3'+
		'\nLG G4'+

		'\n\nApple : 2'+
		'\niPhone 5'+
		'\niPhone 6'+

		'\n\nАналогичный запрос с помощью метода GroupBy:'+
		'\n\nvar phoneGroups = phones.GroupBy(p => p.Company)'+
                        '\n\t .Select(g => new'+
                        '\n\t { '+
                        '\n\t\t Name = g.Key, '+
                        '\n\t\t Count = g.Count(), '+
                        '\n\t\t Phones = g.Select(p =>p) '+
                        '\n\t });'
	},
	{	
		task : '30. class Player'+
		'<br/>{'+
		'<br/>    public string Name { get; set; }'+
		'<br/>    public string Team { get; set; }'+
		'<br/>}'+
		'<br/>class Team'+
		'<br/>{'+
		'<br/>    public string Name { get; set; }'+
		'<br/>    public string Country { get; set; }'+
		'<br/>}'+

		`<br/><br/>List<Team> teams = new List<Team>()
		<br/>{
		<br/>    new Team { Name = "Бавария", Country ="Германия" },
		<br/>    new Team { Name = "Барселона", Country ="Испания" }
		<br/>};
		<br/>List<Player> players = new List<Player>()
		<br/>{
		<br/>    new Player {Name="Месси", Team="Барселона"},
		<br/>    new Player {Name="Неймар", Team="Барселона"},
		<br/>    new Player {Name="Роббен", Team="Бавария"}
		<br/>};

		<br/><br/>Соединить по общему критерию два набора классов`,

		solution : `var result = from pl in players
             join t in teams on pl.Team equals t.Name
             select new 
             { 
             	Name = pl.Name, Team = pl.Team, Country = t.Country 
             };

То же самое действие можно было бы выполнить с помощью метода Join():

var result = players.Join(teams, 
		p => p.Team,
		t => t.Name,
		(p, t) => new { Name = p.Name, Team = p.Team, Country = t.Country });

Метод Join() принимает четыре параметра:
- второй список, который соединяем с текущим
- свойство объекта из текущего списка, по которому идет соединение
- свойство объекта из второго списка, по которому идет соединение
- новый объект, который получается в результате соединения`
	},{	
		task : '31. class Player'+
		'<br/>{'+
		'<br/>    public string Name { get; set; }'+
		'<br/>    public string Team { get; set; }'+
		'<br/>}'+
		'<br/>class Team'+
		'<br/>{'+
		'<br/>    public string Name { get; set; }'+
		'<br/>    public string Country { get; set; }'+
		'<br/>}'+

		`<br/><br/>List<Team> teams = new List<Team>()
		<br/>{
		<br/>    new Team { Name = "Бавария", Country ="Германия" },
		<br/>    new Team { Name = "Барселона", Country ="Испания" }
		<br/>};
		<br/>List<Player> players = new List<Player>()
		<br/>{
		<br/>    new Player {Name="Месси", Team="Барселона"},
		<br/>    new Player {Name="Неймар", Team="Барселона"},
		<br/>    new Player {Name="Роббен", Team="Бавария"}
		<br/>};

		<br/><br/>Сгуппировать всех игроков по командам.`,

		solution : 
`var result2 = teams.GroupJoin(
            players, // второй набор
            t => t.Name, // свойство-селектор объекта из первого набора
            pl => pl.Team, // свойство-селектор объекта из второго набора
            (team, pls) => new  // результирующий объект
            { 
                Name = team.Name, 
                Country = team.Country, 
                Players = pls.Select(p=>p.Name) 
            });
 
foreach (var team in result2)
{
    Console.WriteLine(team.Name);
    foreach (string player in team.Players)
    {
        Console.WriteLine(player);
    }
    Console.WriteLine();
}

Результатом выполнения программы будет следующий вывод:

Бавария
Роббен

Барселона
Месси
Неймар

Метод GroupJoin, также как и метод Join, принимает все те же параметры. Только теперь во последний параметр - делегат передаются объект команды и набор игроков этой команды.`
	},{	
		task : '32. class Player'+
		'<br/>{'+
		'<br/>    public string Name { get; set; }'+
		'<br/>    public string Team { get; set; }'+
		'<br/>}'+
		'<br/>class Team'+
		'<br/>{'+
		'<br/>    public string Name { get; set; }'+
		'<br/>    public string Country { get; set; }'+
		'<br/>}'+

		`<br/><br/>List<Team> teams = new List<Team>()
		<br/>{
		<br/>    new Team { Name = "Бавария", Country ="Германия" },
		<br/>    new Team { Name = "Барселона", Country ="Испания" }
		<br/>};
		<br/>List<Player> players = new List<Player>()
		<br/>{
		<br/>    new Player {Name="Месси", Team="Барселона"},
		<br/>    new Player {Name="Неймар", Team="Барселона"},
		<br/>    new Player {Name="Роббен", Team="Бавария"}
		<br/>};

		<br/><br/>Объединить две последовательности таким образом, что первый элемент из первой последовательности объединился с первым элементом из второй последовательности, второй элемент из первой последовательности соединился со вторым элементом из второй последовательности и так далее.`,

		solution : 
`var result2 = players.Zip(teams, 
          (player, team) => new
           {
                Name = player.Name,
                Team = team.Name, 
                Country = team.Country
           });

foreach (var player in result2)
{
    Console.WriteLine("{0} - {1} ({2})", player.Name, player.Team, player.Country);
                 
    Console.WriteLine();
}

Метод Zip в качестве первого параметра принимает вторую последовательность, с которой надо соединяться, а в качестве второго параметра - делегат для создания нового объекта.

Консольный вывод программы:

Роббен - Бавария (Германия)
Неймар - Барселона (Испания)
Буффон - Ювентус (Италия)`
	},{	
		task : 
`33.  Узнать у всех ли пользователей возраст превышает 20 и имя начинается с буквы T

List<User> users = new List<User>()
{
    new User { Name = "Tom", Age = 23 },
    new User { Name = "Sam", Age = 43 },
    new User { Name = "Bill", Age = 35 }
};`,

		solution :
`bool result1 = users.All(u => u.Age > 20);
 
bool result2 = users.All(u => u.Name.StartsWith("T"));`
	},{	
		task : 
`34.  Узнать соответствует ли хотя бы один пользователь условиям - возраст превышает 20 и имя начинается с буквы T

List<User> users = new List<User>()
{
    new User { Name = "Tom", Age = 23 },
    new User { Name = "Sam", Age = 43 },
    new User { Name = "Bill", Age = 35 }
};`,

		solution : 
`bool result1 = users.Any(u => u.Age < 20); 
 
bool result2 = users.Any(u => u.Name.StartsWith("T"));`
	},{	
		task : `35. С помощью каких методов можно применить немедленное выполнение запроса?`,

		solution : 
`
1. Перебор в цикле foreach.

2.  Методы, которые возвращают одно атомарное значение или один элемент. Например, Count(), Average(), First() / FirstOrDefault(), Min(), Max() и т.д.

3. Методы преобразования ToArray<T>(), ToList<T>(), ToDictionary() и т.д..
`
	},{	
		task : ``,

		solution : ``
	}
];