'use strict'	  
//https://www.w3schools.com/sql/sql_insert.asp
var sql_db_1 = 
[
	{	
		task : "1. What is PRIMARY KEY?", 		
		solution : "The PRIMARY KEY constraint uniquely identifies each record in a database table.\n\nPrimary keys must contain UNIQUE values, and cannot contain NULL values.\n\nA table can have only one primary key, which may consist of single or multiple fields.\n\n"
	},{			
		task : '1a. Create a PRIMARY KEY on the "ID" column when the "Persons" table is created', 			
		
		solution : 'CREATE TABLE Persons (\n    ID int NOT NULL PRIMARY KEY,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int\n);'
	},{		
		task : '1b. Naming of a PRIMARY KEY constraint, and for defining a PRIMARY KEY constraint on multiple columns,',			
		solution : 'CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)\n);'
	},{	
		task : '1c. Ncreate a PRIMARY KEY constraint on the "ID" column when the table is already created',
		solution : 'ALTER TABLE Persons\nADD PRIMARY KEY (ID);'
	},{	
		task : '1d. Naming of a PRIMARY KEY constraint, and for defining a PRIMARY KEY constraint on multiple columns',
		solution : 'ALTER TABLE Persons\nADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);'
	},{	
		task : '1f. Drop a PRIMARY KEY constraint',
		solution : 'ALTER TABLE Persons\nDROP CONSTRAINT PK_Person;'
	},{	
		task : "2. What is FOREIGN KEY?", 		
		solution : "A FOREIGN KEY is a key used to link two tables together.\nA FOREIGN KEY in a table points to a PRIMARY KEY in another table.\n\n"+
		'The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.'
	},{			
		task : '2a. Create a FOREIGN KEY on the "PersonID" column when the "Orders" table is created.', 
		solution : "CREATE TABLE Orders (\n    OrderID int NOT NULL PRIMARY KEY,\n    OrderNumber int NOT NULL,\n    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)\n);"
	},{			
		task : "2b. Naming of a FOREIGN KEY constraint, and for defining a FOREIGN KEY constraint on multiple columns", 			
		solution : "CREATE TABLE Orders (\n    OrderID int NOT NULL,\n    OrderNumber int NOT NULL,\n    PersonID int,\n    PRIMARY KEY (OrderID),\n    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)\n    REFERENCES Persons(PersonID)\n);"
	},{			
		task : '2c. creCreateate a FOREIGN KEY constraint on the "PersonID" column when the "Orders" table is already created', 			
		solution : "ALTER TABLE Orders \nADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);"
	},{				
		task : "2d. Drop a FOREIGN KEY constraint.", 			
		solution : "ALTER TABLE Orders \nDROP CONSTRAINT FK_PersonOrder;"
	},{	
		task : '3. Create a database called "testDB":', 	
		solution : "CREATE DATABASE testDB; \n\nTip: Make sure you have admin privilege before creating any database. Once a database is created, you can check it in the list of databases with the following SQL command: SHOW DATABASES;"
	},{	
		task : "4. Drop an existing SQL database", 		
		solution : "DROP DATABASE databasename;"
	},{	
		task : "5. Create a table called 'Persons' that contains five columns: \nPersonID, LastName, FirstName, Address, and City:", 			
		solution : "CREATE TABLE Persons (\nPersonID int, \nLastName varchar(255), \nFirstName varchar(255), \nAddress varchar(255), \nCity varchar(255));"
	},{	
		task : "6. Create Table Using Another Table", 	
		solution : "CREATE TABLE new_table_name AS \nSELECT column1, column2,... \nFROM existing_table_name \nWHERE ....;"+
		'\n\nThe new table gets the same column definitions. All columns or specific columns can be selected. \n\nIf you create a new table using an existing table, the new table will be filled with the existing values from the old table.'
	},{	
		task : "7. Drop the existing table 'Shippers'",		
		solution : "DROP TABLE Shippers;"
	},{	
		task : "8. Delete the data inside a table, but not the table itself", 	
		solution : "TRUNCATE TABLE table_name;"
	},{	
		task : '9. Add a column named "DateOfBirth" in the "Persons" table', 	
		solution : 'ALTER TABLE Persons \nADD DateOfBirth date; \n\nNotice that the new column, "DateOfBirth", is of type date and is going to hold a date. The data type specifies what type of data the column can hold.'
	},{	
		task : "10. Change the data type of the column named 'DateOfBirth' in the 'Persons' table.", 	
		solution : "ALTER TABLE Persons \nALTER COLUMN DateOfBirth year;"
	},{	
		task : '11. Delete the column named "DateOfBirth" in the "Persons" table.', 	
		solution : "ALTER TABLE Persons \nDROP COLUMN DateOfBirth;"
	},{	
		task : '12. What is Constraints?', 			
		solution : "SQL constraints are used to specify rules for data in a table.\n"+
		'Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABLE statement.\n\n'+
		'Syntax: \n\nCREATE TABLE table_name ( \n\tcolumn1 datatype constraint, \n\tcolumn2 datatype constraint, \n\tcolumn3 datatype constraint, \n\t.... \n);'+
		'\n\nConstraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.'
	},{	
		task : '13. What Constrains exist?', 		
		solution : 'Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.'+
		'\n\nThe following constraints are commonly used in SQL:'+
		'\n\nNOT NULL - Ensures that a column cannot have a NULL value'+
		'\nUNIQUE - Ensures that all values in a column are different'+
		'\nPRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table'+
		'\nFOREIGN KEY - Uniquely identifies a row/record in another table'+
		'\nCHECK - Ensures that all values in a column satisfies a specific condition'+
		'\nDEFAULT - Sets a default value for a column when no value is specified'+
		'\nINDEX - Use to create and retrieve data from the database very quickly'
	},{	
		task : '14. Create Table where "ID", "LastName", and "FirstName" columns will NOT accept NULL values', 	
		solution : "CREATE TABLE Persons ( \n    ID int NOT NULL, \n    LastName varchar(255) NOT NULL, \n    FirstName varchar(255) NOT NULL, \n    Age int \n);"+
		'\n\nBy default, a column can hold NULL values.\n\nTip: If the table has already been created, you can add a NOT NULL constraint to a column with the ALTER TABLE statement.'
	},{	
		task : '15. Name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns', 		
		solution : "CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    CONSTRAINT UC_Person UNIQUE (ID,LastName)\n);"
	},{	
		task : '16. Creates a UNIQUE constraint on the "ID" column when the "Persons" table is created', 
		solution : "CREATE TABLE Persons (\n    ID int NOT NULL UNIQUE,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int\n);"
	},{	
		task : '17. Create a UNIQUE constraint on the "ID" column when the table is already created.', 	
		solution : "ALTER TABLE Persons\nADD UNIQUE (ID);"
	},{	
		task : '18. To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns', 	
		solution : "ALTER TABLE Persons\nADD CONSTRAINT UC_Person UNIQUE (ID,LastName);"
	},{	
		task : '19. Drop a UNIQUE constraint', 			
		solution : "ALTER TABLE Persons \nDROP CONSTRAINT UC_Person;"
	},{	
		task : '20. What is CHECK Constraint?', 					
		solution : "The CHECK constraint is used to limit the value range that can be placed in a column."+
		'\n\nIf you define a CHECK constraint on a single column it allows only certain values for this column.'+
		'\n\nIf you define a CHECK constraint on a table it can limit the values in certain columns based on values in other columns in the row.'
	},{	
		task : '21. Create a CHECK constraint on the "Age" column when the "Persons" table is created. The CHECK constraint ensures that you can not have any person below 18 years.', 					
		solution : "CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int CHECK (Age>=18)\n);"
	},{	
		task : '22. Naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns.', 					
		solution : "CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    City varchar(255),\n    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')\n);"
	},{	
		task : '23. Create a CHECK constraint on the "Age" column when the table is already created.', 					
		solution : "ALTER TABLE Persons \nADD CHECK (Age>=18);"
	},{	
		task : '24. Naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns.', 					
		solution : "ALTER TABLE Persons \nADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');"
	},{	
		task : '25. Drop a CHECK constraint', 					
		solution : "ALTER TABLE Persons \nDROP CONSTRAINT CHK_PersonAge;"
	},{	
		task : '26. What is DEFAULT Constraint?', 					
		solution : "The DEFAULT constraint is used to provide a default value for a column.\n\nThe default value will be added to all new records IF no other value is specified."
	},{	
		task : '27. Set a DEFAULT value for the "City" column when the "Persons" table is created', 					
		solution : "CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    City varchar(255) DEFAULT 'Sandnes'\n);"
	},{	
		task : '28.  Insert system values, by using functions like GETDATE().', 					
		solution : "CREATE TABLE Orders (\n    ID int NOT NULL,\n    OrderNumber int NOT NULL,\n    OrderDate date DEFAULT GETDATE()\n);"
	},{	
		task : '29. Create a DEFAULT constraint on the "City" column when the table is already created', 					
		solution : "ALTER TABLE Persons \nALTER COLUMN City SET DEFAULT 'Sandnes';"
	},{	
		task : '30. Drop a DEFAULT constraint.', 					
		solution : "ALTER TABLE Persons \nALTER COLUMN City DROP DEFAULT;"
	},{	
		task : '31. What is INDEX Statement?', 					
		solution : "The CREATE INDEX statement is used to create indexes in tables."+
		'\n\nIndexes are used to retrieve data from the database very fast. The users cannot see the indexes, they are just used to speed up searches/queries.'+
		'\n\nNote: Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.'+
		'\n\nDuplicate values are allowed'
	},{	
		task : '32. INDEX Syntax', 					
		solution : "CREATE INDEX index_name \nON table_name (column1, column2, ...);"+
		'\n\nDuplicate values are allowed'
	},{	
		task : '33. UNIQUE INDEX Syntax', 					
		solution : "CREATE UNIQUE INDEX index_name \nON table_name (column1, column2, ...);"+
		'\n\nDuplicate values are not allowed.'
	},{	
		task : '34.  Create an index named "idx_lastname" on the "LastName" column in the "Persons" table.', 					
		solution : "CREATE INDEX idx_lastname \nON Persons (LastName);"
	},{	
		task : '35.  Create an index on a combination of columns, you can list the column names within the parentheses, separated by commas', 					
		solution : "CREATE INDEX idx_pname \nON Persons (LastName, FirstName);"
	},{	
		task : '36. Delete an index in a table', 					
		solution : "DROP INDEX table_name.index_name;"
	},{	
		task : '', 					
		solution : ""
	},{	
		task : '', 					
		solution : ""
	},{	
		task : '', 					
		solution : ""
	},{	
		task : '', 					
		solution : ""
	}
]