'use strict'	  
//https://jsehelper.blogspot.com/2016/01/javascript.html
var js_1 = 
[
	{	
		task : "1. Как переадресовать страницу в js?", 			
		
		solution : '\nwindow.location.href= "https://prog-training.github.io/";'
	},
	{	
		task : '2. Как алертом вывести сообщение через 3 сек после запуска скрипта.', 
		solution : 'setTimeout(function(){alert("Message1")}, 3000);'+
		"\n\n OR \n\nsetTimeout('alert('\"Message2\")', 4000);"
	},
	{	
		task : '3. Чем отличается наследование в JS?', 
		solution : 'Наследование на прототипах. Каждый объект может иметь ассоциацию с другим объектом, т.н. прототипом.'+
		' В случае, если поиск некоторого свойства (или метода) в исходном объекте заканчивается неудачно, интерпретатор'+
		' пытается найти одноименное свойство (метод) в его прототипе, затем в прототипе прототипа и т.д.'+
		'\n\nНапример, если мы затребовали обращение к obj.prop (или obj["prop"]), JS начнет искать prop в самом объекте obj,'+
		' затем в прототипе obj, прототипе прототипа obj, и так дo конца.'
	},
	{	
		task : '4. Привести пример наследования в JS. <br/> &nbsp&nbsp&nbsp  1) Пусть cat наследуется от animal.<br/> &nbsp&nbsp&nbsp  2) MyType наследуется от Obj.', 
		solution : '1}\n\tcat.prototipe = animal;'+
		'\n\n2)\n\t var Obj = { x: "1"};'+
		'\n\t var MyType = function (){};'+
		'\n\t MyType.prototype = Obj;'+
		'\n\t var newObj = new MyType();'+
		'\n\t document.write(newObj.x);'
	},
	{	
		task : '5. Что такое объект в JS?', 
		solution : 'Объект в JS - это ассоциативный массив, хэш. \n\nОн хранит любые пары ключ => значение и имеет несколько стандартных методов.'
	},
	{	
		task : '6. Какая разница между функциями?'+
		'<br/><br/>function F(){};'+
		'<br/><br/>var F = function(){};', 
		solution : 'Разница в видимости. \n\n1й вариант виден везде в текущей области видимости. \n\n2й вариант присваивает функцию переменной. Поэтому такая функция видна только после определения.'
	},
	{	
		task : '7. Как создать массив в JS?', 
		solution : 'var array = [item1, item2, item3];'+
		'\nvar empty = [];'+
		'\n\nvar array = new Array (item1, item2, item3);'+
		'\nvar empty = new Array ();'
	},
	{	
		task : '8. Как использовать функцию в качестве конструктора?', 
		solution : 'var B = function(){}; \nvar myB = new B();'+
		'\n\nvar B = function(age){ this.Age = age; }; \nvar myB = new B(33); \ndocument.write(myB.Age);'
	},
	{	
		task : '9. Что такое метод объекта в JS?', 
		solution : 'Это просто функция, добавленная в ассоциативный массив.'
	},
	{	
		task : '10. Какие конструкции циклов есть в JS?', 
		solution : 'for, while and do ... while.'
	},
	{	
		task : '11. Что сделает код: break mark;', 
		solution : 'Выведет из текущего блока цикла или switch на метку mark.'
	},
	{	
		task : '12. Можно ли задать массив таким образом? <br/>var array = "a,b".split(",");', 
		solution : 'Да.'
	},
	{	
		task : '13. Что выведет alert(typeof null)?', 
		solution : 'object \n\n– это официально признанная ошибка в языке, которая сохраняется для совместимости.'
	},
	{	
		task : '14. Сколько и какие типы данных в JS?', 
		solution : '6 \nnumber (infinity, NaN) \nstring \nboolean \nnull \nundefined \nobject '
	},
	{	
		task : '15. Что выведет alert(null instanceof object)?'+
		'<br/><br/> Создать класс и объект rabbit и проверить', 
		solution : 'false \n\nОператор instanceof позволяет проверить принадлежит ли объект данному классу(типу), с учетом прототипного наследования.'+
		'\n\n\nfunction Rabbit(){};'+
		'\nvar rabbit = new Rabbit();'+
		'\nvar x = rabbit instanceof Rabbit;'+		
		'\ndocument.write(x); \n\ntrue'
	},
	{	
		task : '16. Что выведет alert(typeof NaN)?', 
		solution : '"Number"'
	},
	{	
		task : '17. Что выведет alert(NaN === NaN)?', 
		solution : 'false \n\nДля чего нужна функция isNaN?'+
		'\n\nВ отличие от других возможных значениях в JavaScript, при работе с значением данного типа невозможно полагаться на == и === для определения, является ли переменная или литерал не числовым значением (NaN) или нет, так как проверки NaN == NaN и NaN === NaN в качестве значения вернут false. Следовательно, для проверки нужна функция isNaN.'
	},
	{	
		task : '18. 0.1 + 0.2 == 0.3?', 
		solution : 'false \nЭто точность вычислений.'
	},
	{	
		task : '19. В чем разница innerHTML и outerHTML?', 
		solution : 'innerHTML содержит HTML код, который находится внутри этого элемента.'+
		'\n\nouterHTML почти аналогичен innerHTML, разница в том, что он возвращает полный HTML элемента.'
	},
	{	
		task : '20. Какая разница между операторами == и ===', 
		solution : 'Оператор == сравнивает на равенство, \nа вот === сравнивает на идентичностью.'+
		'\n\nПлюс оператора === состоит в том, что он не приводит два значения к одному типу. Именно из-за этого он обычно и используется.'
	},
	{	
		task : '21.В чем разница между Object.getOwnPropertyNames(obj1) и Object.keys(obj1)?', 
		solution : 'Метод Object.getOwnPropertyNames() возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет), найденными непосредственно в переданном объекте.'+
		'\n\nМетод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).'
	},
	{	
		task : '22. С помощью какой конструкции языка можно управлять потоком выполнения языка и отслеживать ошибки?', 
		solution : 'try{ \n\talert("Without Exception!")\n} catch(e){ \n\talert("Exception!"); \n}'
	},
	{	
		task : '23. Что такое глобальные переменные? Как они создаются? Какие проблемы связаны с использованием глобальных переменных?', 
		solution : 'Глобальная переменная - переменная, которая доступна (видима) во всем документе.'+
		'\n\nВ отличие от локальной, которая ограничена рамками блока программного кода, внутри которого она определена.'+
		'\n\nВозможен конфликт локальных и глобальных переменных.'+
		'\n\nТак же код, использующий глобальные переменные, тяжелее сопровождать и тестировать.'
	},
	{	
		task : '24. Что такое замыкание?', 
		solution : 'Замыкание - это когда объект локальных переменных [[scope]] внешней функции остается жить после ее завершения.'+
		'\n\nВнутренняя функция может обратиться к нему в любой момент и получить переменную внешней функции.'
	},
	{	
		task : '25. Паттерн "Модуль"', 
		solution : '(function(){ \n\n\n})();'
	},
	{	
		task : '26. Напишите функцию, принимающую строку с именем файла и возвращающую расширение (фрагмент после последней точки).', 
		solution : 'function getExtention(fileName){'+
		'\n\tvar array = fileName.Split(".");'+
		'\n\treturn array[array.length-1];'+
		'\n}'
	},
	{	
		task : '27. Что вернет выражение +new Date();? Чем отличается от Date.now()?', 
		solution : '1e создаст экземпляр объекта Date и благодаря + переведет его в числовой формат.'+
		'\n\n2е вызовется статический метод конструктора, что является более приоритетным, т.к. во-первых не требует создания экземпляра и во-вторых является более понятным.'
	},
	{	
		task : '28. Какое значение вернет ~~3.14?', 
		solution : '3 \n\nоператор тильда (побитовое НЕ), \n\nвыполняет для целых чисел фактически -( n + 1 ).'+
		'\n\n...используется гуру в качестве округления'+
		'\n\nОкругляет в меньшую сторону до целого числа.'
	},
	{	
		task : '29. Какое значение возвращает данное предложение? \n\n"i\'m a lasagna hog".split("").reverse().join("");', 
		solution : 'goh angasala a m\'i'
	},
	{	
		task : '30. Что такое prototype в JS?', 
		solution : 'Это свойство, позволяющее добавлять уже существующим объектам свойства, так же используется для эмуляции наследования в JS.'+
		'\n\nPrototype.js - популярная библиотека, добавляющая ООП возможности.'
	},
	{	
		task : '31. Какие есть способы навешивания обработчиков событий?', 
		solution : '1) <input value="Нажми меня" onclick="alert("Клик!")" type="button">'+
		'\n\n<input type="button" onclick="countRabbits()" value="Считать кроликов!"/>'+
		'\n\nhtmlElement.onClick = function(event){...}; \n\n- добавляет только один обработчик.'+

		'\n\n\n\n2) htmlElement.AddEventListener("click", handler[, phase]); \n\n- можно навесить несколько обработчиков, сохраняется их порядок.'+

		'\n\n\n\n3) htmlElement.attachEvent("on"+имя события, обработчик); \n\n- можно навесить несколько, но не сохраняется порядок обработчиков, нет доступа к элементу на котором сработало событие.'
	},
	{	
		task :
		`32. Как в JavaScript вывести на экран число, которое будет меняться, например, 
		каждую секунду?`, 
		solution : 
`x = 1;
function foo() {
	document.write('<br/>' + x);
	x++;
}

setInterval('foo()', 500);

или

x = 1;
setInterval(function foo() {
	document.write('<br/>' + x);
	x++;
}, 500);`
	},
	{	
		task :
``, 
		solution : 
``
	},
	{	
		task :
``, 
		solution : 
``
	}
];