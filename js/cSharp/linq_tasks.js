'use strict'

var linq_tasks = 
[
	{	
		task : 
`public class House
<br/>{
<br/>&nbsp	public string Address { get; set; }
<br/>&nbsp	public List<Person> Housemates { get; set; }
<br/>}
<br/>
<br/>public class Person
<br/>{
<br/>&nbsp	public string Name { get; set; }
<br/>&nbsp	public string Surname { get; set; }
<br/>&nbsp	public List<string> Phones { get; private set; }
<br/>
<br/>&nbsp    public Person()
<br/>&nbsp   {
<br/>&nbsp&nbsp&nbsp       Phones = new List<string>();
<br/>&nbsp    }
<br/>}
<br/>
<br/>public static void Main()
<br/>{
<br/>&nbsp	var person1 = new Person { Name = "Adam", Surname = "Smith" };
<br/>&nbsp	person1.Phones.Add("123456789");
<br/>&nbsp	person1.Phones.Add("123456788");
<br/>
<br/>&nbsp	var person2 = new Person { Name = "John", Surname = "Hall" };
<br/>&nbsp	person2.Phones.Add("456789123");
<br/>
<br/>&nbsp	var person3 = new Person { Name = "Mamie", Surname = "William" };
<br/>&nbsp	person3.Phones.Add("78946132d");
<br/>
<br/>&nbsp	var person4 = new Person { Name = "Doris", Surname = "Gravelle" };
<br/>
<br/>&nbsp	var person5 = new Person { Name = "Patricia", Surname = "Wilbur" };
<br/>&nbsp	person5.Phones.Add("432789159");
<br/>&nbsp	person5.Phones.Add("434589159");
<br/>&nbsp	person5.Phones.Add("437789559");
<br/>	
<br/>&nbsp	var houses = new List<House>() 
<br/>&nbsp	{ 
<br/>&nbsp&nbsp&nbsp		new House { Address = "Poznan, sw Marcin 12", 
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Housemates = new List<Person>() { person2, person1 }},
<br/>&nbsp&nbsp&nbsp		new House { Address = "Poznan, sw Marcin 15", 
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Housemates = new List<Person>() { person4, person5 }}, 
<br/>&nbsp&nbsp&nbsp		new House { Address = "Poznan, sw Marcin 18",
 <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Housemates = new List<Person>() { person2 }},
<br/>&nbsp&nbsp&nbsp		new House { Address = "Poznan, sw Marcin 18", 
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Housemates = new List<Person>() { person3 }} 
<br/>&nbsp	};
<br/>	
<br/>&nbsp	//Count all persons in houses
<br/>
<br/>&nbsp	//Write all phone numbers that is valid (consist of 9 digit)	
<br/>}`,

		solution : 
`var personNumber = 
	  houses.SelectMany(h => h.Housemates)
	  .Distinct()
	  .Count();

var validPhoneNumber = 
	  houses.SelectMany(h => h.Housemates)
	  .SelectMany(p => p.Phones).Distinct()
	  .Where(p => p.All(
	  	c => char.IsDigit(c)) && p.Count() == 9)
	  .Count()`
	},{	
		task : 
`lt2`,

		solution : 
`lt`
	}
];