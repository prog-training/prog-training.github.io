'use strict'	  
var elementary_csharp = 
[
	{	
		task : "1. Какие методы имеет Object?", 			
		
		solution : '1. Equals(Object)	\n'+
		'2. Equals(Object, Object)	\n'+		
		'3. Finalize()\n'+	
		'4. GetHashCode()\n'+	
		'5. GetType()\n'+	
		'6. MemberwiseClone()\n'+	
		'7. ReferenceEquals(Object, Object)\n'+	
		'8. ToString()'
	},
	{	
		task : "2. Модификаторы доступа?",

		solution : "public\nprivate\nprotected\ninternal\nprotected internal\n\n"+
		"Доступ к типу или элементу может осуществляться любым кодом в сборке, в которой он объявлен, или из наследованного класса другой сборки. Доступ из другой сборки должен осуществляться в пределах объявления класса, производного от класса, в котором объявлен защищенный внутренний элемент, и должен происходить через экземпляр типа производного класса."+
		"По умолчанию - private."
	},
	{	
		task : "3. Что может входить в интерфейс?",

		solution : "Интерфейс содержит только сигнатуры: \n\t- методов, \n\t- свойств, \n\t- событий или \n\t- индексаторов."
	},
	{	
		task : `4. Создать метод расширения, считающий символы в строке.
		<br/>
		<br/>class Program
	    <br/>{
	    <br/>&nbsp    public static void Main (string[] args)
	    <br/>&nbsp    {
	    <br/>&nbsp&nbsp&nbsp        string t = "test string"; // 11 letters
	    <br/>&nbsp&nbsp&nbsp        Console.WriteLine(t.countLetter());
	    <br/>&nbsp    }
	    <br/>}`,

		solution : 
`using System;
using System.Linq;
		
namespace ExtentionMethod
{
	public static class Foo
	{
		public static int countLetter( this string str )
		{
			return str.Count();   
		}
	}
	
	public class Program
	{
		public static void Main (string[] args) 
		{ 
			string t = "test string"; // 11 letters 
			Console.WriteLine(t.countLetter()); 
		} 
	}
}`
	},
	{	
		task : `5. На какие две категории делятся все типы данных?`,

		solution : 
`- ссылочные типы,
- типы значений

Они отличаются способом хранения в памяти, производительностью и другим.`
	},
	{	
		task : `6. Что относятся типам значений?`,

		solution : 
`- Численные типы
- Тип bool;
- Пользовательские структуры (struct);
- Перечисления (enum).`
	},
	{	
		task : `7.  Что относятся ссылочным типам?`,

		solution : 
`- Классы (class);
- Интерфейсы (interface);
- Делегаты (delegate);
- Тип object;
- Тип string.`
	},
	{	
		task : `8. Где хранятся типы значений?`,

		solution : 
`Типы значений хранятся в стеке.

Стек - это область памяти, которая используется для передачи параметров в методы и хранения локальных переменных. 

Данные переменной типа значения хранятся в самой переменной.`
	},
	{	
		task : `9. Где хранятся ссылочные типы?`,

		solution : 
`Переменная ссылочного типа содержит не данные, а ссылку на них. 

Сами данные в этом случае уже хранятся в куче. 

Куча - это область памяти, в которой размещаются управляемые объекты, и работает сборщик мусора.`
	},
	{	
		task : `10. При присвоении значения одной переменной (ЗНАЧИМОГО типа) другой, дальнейшее изменение одной из переменных влияет на другую?`,

		solution : 
`Нет. Потому, что хранение данных значимого типа происходит в самой переменной.`
	},
	{	
		task : `11. При присвоении значения одной переменной (ССЫЛОЧНОГО типа) другой, дальнейшее изменение одной из переменных влияет на другую?`,

		solution : 
`Да. Потому, что переменная ссылочного типа содержит не данные, а ссылку на них.`
	},
	{	
		task : `12. Можно ли переменные одного типа  преобразовывать в переменные другого типа?`,

		solution : 
`Да. Преобразование бывает явным и неявным. Неявное преобразование выполняет компилятор.

При явном преобразовании необходимо непосредственно перед переменной, которую вы хотите преобразовать, указать в скобках тип, к которому приводится переменная.

AS более безопасно, т.к. при невозможности перобразования результат приравнивается к null. 
Не применимо к структурам. Т.к. структура не ссылка и не может бать равна null.
`
	},
	{	
		task : `13. Что такое this?`,

		solution : 
`Указатель this - это указатель на объект, для которого был вызван нестатический метод. 

Ключевое слово this обеспечивает доступ к текущему экземпляру класса. `
	},
	{	
		task : `14. Что такое статический конструктор для чего он нужен?`,

		solution : 
`Статический конструктор вызывается в самом начале, т. е. перед созданием первого экземпляра класса.

В статическом конструкторе можно задать начальные значения для статических переменных класса.
`
	},
	{	
		task : `15. Какие модификаторы доступа для классов?`,

		solution : 
`Модификаторов доступа для классов есть два:
- public 
– internal – доступ к классу возможен только из сборки, в которой он объявлен.

По умолчанию: internal.
`
	},
	{	
		task : `16. Какие члены может содержать класс?`,

		solution : 
`- поля;
- константы;
- свойства;
- конструкторы;
- методы;
- события;
- операторы;
- индексаторы;
- вложенные типы.

Поле – это переменная, объявленная внутри класса.

Как правило, поля объявляются с модификаторами доступа private либо protected, чтобы запретить прямой доступ к ним.

Для получения доступа к полям следует использовать свойства или методы.`
	},
	{	
		task : `17. Что такое полиморфизм?`,

		solution : 
`Сам термин полиморфизм можно перевести как «много форм». 

Полиморфизмом называется способность функции обрабатывать данные разных типов. 

А если говорить проcтыми словами,полиморфизм – это различная реализация однотипных действий.`
	},
	{	
		task : `18. Что такое статический полиморфизм?`,

		solution : 
`Перегрузка функции.`
	},
	{	
		task : `19. Что такое динамический полиморфизм?`,

		solution : 
`Под одной интерфейсной ссылкой (или ссылкой на абстрактый класс) можно создать объекты различных классов, которые реализуют интерфейс (или являются наследниками абстрактного класса).`
	},


	{	
		task : `20. Интерфейсы, отличие от абстрактных классов`,

		solution : 
`Абстрактный класс — это заготовка класса: реализовано большинство методов.
Абстрактный класс — средство для повторного использования кода.

Интерфейс же — это своего рода контракт: он используются чтобы указать, что класс
будет гарантированно реализовывать набор методов с определённой семантикой.`
	},
	{	
		task : `21. Различия между структурой и классом?`,

		solution : 
`1. Размещение:				в стеке - в управляемой куче
2. Представление: 			в виде локальной копии - в виде ссылки
3. Передача:	 			по значению - по ссылке
		(при присвоении копируются ссылки на объекты, но не сами объекты)

4. Наследование поддерживается?:	Нет. - Да.
5. Наследуются:	 			от System.ValueType - от любых других

6. Можно ли определять конструкторы:   
	- Да, но имеется зарезервированный конструктор по умолчанию
		Структура не может содержать конструктор без параметров 
	- Да
7. Когда прекращают существование:
	- Когда выходят за рамки того контекста, в котором определялись.
	- Когда объект подвергается сборке мусора.

- Для ссылочных типов значение по умолчанию – null
- При конверт-нии между типами происходит упаковка и распаковка.

- Объявления полей структуры не могут иметь инициализаторов
- Различная интерпретация this для структуры и класса
- Структура не может содержать деструктор`
	},
	{	
		task : `ref out`,

		solution : 
``
	},
	{	
		task : `Перегрузка операторов`,

		solution : 
``
	},
	{	
		task : `Exception`,

		solution : 
``
	},
	{	
		task : `Коллекции`,

		solution : 
``
	},
	{	
		task : `Работа с файлами`,

		solution : 
``
	},
	{	
		task : `Делегаты и события`,

		solution : 
``
	},
	{	
		task : `XML, Json`,

		solution : 
``
	},
	{	
		task : `Сериализация`,

		solution : 
``
	},
	{	
		task : `Рефлексия`,

		solution : 
``
	}
];