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
		"Доступ к типу или элементу может осуществляться любым кодом в сборке, в которой он объявлен, или из наследованного класса другой сборки. Доступ из другой сборки должен осуществляться в пределах объявления класса, производного от класса, в котором объявлен защищенный внутренний элемент, и должен происходить через экземпляр типа производного класса."
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
		task : ``,

		solution : 
``
	}
];