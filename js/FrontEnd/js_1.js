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
		' затем в прототипе obj, прототипе прототипа obj, и так д конца.'
	},
	{	
		task : '4. Привести пример наследования в JS. <br/>1) Пусть cat наследуется от animal.<br/>2) MyType наследуется от Obj.', 
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
		'\nvar array = new Array (item1, item2, item3);'+
		'\nvar empty = new Array ();'
	},
	{	
		task : '', 
		solution : 'solution2'
	},
	{	
		task : '', 
		solution : 'solution2'
	},
	{	
		task : '', 
		solution : 'solution2'
	}
];