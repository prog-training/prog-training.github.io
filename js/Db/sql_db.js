'use strict'	  
//https://www.w3schools.com/sql/sql_insert.asp
var sql_db = 
[
	{	
		task : "1. What is PRIMARY KEY?", 			
		
		solution : "The PRIMARY KEY constraint uniquely identifies each record in a database table.\nPrimary keys must contain UNIQUE values, and cannot contain NULL values.\nA table can have only one primary key, which may consist of single or multiple fields.\n\n"+
		'CREATE TABLE Persons (\n\tID int NOT NULL,\n\tLastName varchar(255) NOT NULL,\n\tFirstName varchar(255),\n\tAge int,\n\tPRIMARY KEY (ID)\n);\n\n'+
		'ALTER TABLE Persons\nADD PRIMARY KEY (ID);\n\n' +
		'ALTER TABLE Persons\nDROP CONSTRAINT PK_Person;'
	},{	
		task : "2. What is FOREIGN KEY?", 			
		
		solution : "A FOREIGN KEY is a key used to link two tables together.\nA FOREIGN KEY in a table points to a PRIMARY KEY in another table.\n\n"+
		''
	},{	
		task : "3?", 			
		
		solution : "3"
	}
]