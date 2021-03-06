'use strict'
//https://habrahabr.ru/post/202018/

var OWIN = 
[
	{	
		task : 
`1. Что такое OWIN?`,

		solution : 
`OWIN или Open Web Interface for .NET представляет собой спецификацию, 
определяющую взаимодействие между веб-приложением и веб-сервером. 

Современным веб-приложениям требуется больше гибкости. 
И ответом на эти вызовы стало появление спецификации OWIN.

необходимость в новом уровне абстракции между хостингом и приложениями, 
дабы связывать все модули и в то же время не заботится о деталях реализации хостинга, т.н. middleware`
	},
	{	
		task : 
`2. Основа Owin?`,

		solution : 
`Основой работы OWIN является словарь IDictionary<string, object>, 
который используется для получения доступа к HTTP запросам, заголовку запроса и окружению хоста.

Owin-совместимый сервер отвечает за заполнение этого словаря данными.`
	},
	{	
		task : 
`3. Что такое Katana?`,

		solution : 
`Katana — это OWIN-совместимый хост написанный Microsoft. Помимо реализации спецификации OWIN, Katana содержит 
различные вспомогательные классы и обертки для упрощения разработки, содержащиеся в библиотеке Owin.`
	},
	{	
		task : 
`4. Какой класс ищет Катана и какой метод затем вызывает?`,

		solution : 
`Одно из соглашений Katana: при запуске веб приложения Katana ищет класс Startup 
и вызывает его метод Configuration(), для создания и конфигурирования конвеера обработки сообщений.`
	},
	{	
		task : 
`5. ?`,

		solution : 
``
	}
];