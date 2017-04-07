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
		task : '1b. Name a PRIMARY KEY constraint, and define a PRIMARY KEY constraint on multiple columns.',			
		solution : 'CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)\n);'
	},{	
		task : '1c. Create a PRIMARY KEY constraint on the "ID" column when the table is already created',
		solution : 'ALTER TABLE Persons\nADD PRIMARY KEY (ID);'
	},{	
		task : '1d. Name of a PRIMARY KEY constraint, and define a PRIMARY KEY constraint on multiple columns when the table is already created',
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
		task : '2c. Create a FOREIGN KEY constraint on the "PersonID" column when the "Orders" table is already created', 			
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
		task : '18. To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns when table has created alredy.', 	
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
		task : '24. Naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns when table has created alredy.', 					
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
		'\n\nNote: Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.'
	},{	
		task : '32. INDEX Syntax', 					
		solution : "CREATE INDEX index_name \nON table_name (column1, column2, ...);"+
		'\n\nDuplicate values are allowed.'
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
		task : '37. What is INCREMENT Field?', 					
		solution : 'Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.'+
		'\n\nOften this is the primary key field that we would like to be created automatically every time a new record is inserted.'
	},{	
		task : '38. Define the "ID" column to be an auto-increment primary key field in the "Persons" table.', 					
		solution : 'CREATE TABLE Persons ('+
    	'\n\tID int NOT NULL AUTO_INCREMENT,'+
    	'\n\tLastName varchar(255) NOT NULL,'+
    	'\n\tFirstName varchar(255),'+
    	'\n\tAge int,'+
    	'\n\tPRIMARY KEY (ID)'+
		'\n);'
	},{	
		task : '39. Let the AUTO_INCREMENT sequence start with value 100.', 					
		solution : "ALTER TABLE Persons AUTO_INCREMENT=100;"+
		'\n\nBy default, the starting value for AUTO_INCREMENT is 1.'+
		'\n\nTo insert a new record into the "Persons" table, we will NOT have to specify a value for the "ID" column (a unique value will be added automatically):'+
		'\n\nINSERT INTO Persons (FirstName,LastName)'+
		"\nVALUES ('Lars','Monsen');"
	},{	
		task : '40. Define the "ID" column to be an auto-increment primary key field in the "Persons" table.', 					
		solution : 'CREATE TABLE Persons ('+
    	'\n\tID int IDENTITY(1,1) PRIMARY KEY,'+
    	'\n\tLastName varchar(255) NOT NULL,'+
    	'\n\tFirstName varchar(255),'+
    	'\n\tAge int'+
		'\n);'+
		'The MS SQL Server uses the IDENTITY keyword to perform an auto-increment feature.'+
		'\n\nIn the example above, the starting value for IDENTITY is 1, and it will increment by 1 for each new record.'+
		'\n\nTip: To specify that the "ID" column should start at value 10 and increment by 5, change it to IDENTITY(10,5).'+
		'\n\nTo insert a new record into the "Persons" table, we will NOT have to specify a value for the "ID" column (a unique value will be added automatically):'+
		'\n\nINSERT INTO Persons (FirstName,LastName)'+
		"\nVALUES ('Lars','Monsen');"+
		'\n\nThe SQL statement above would insert a new record into the "Persons" table. The "ID" column would be assigned a unique value. The "FirstName" column would be set to "Lars" and the "LastName" column would be set to "Monsen".'
	},{	
		task : '41. What is CREATE  VIEW?', 					
		solution : 'In SQL, a view is a virtual table based on the result-set of an SQL statement.'+
		'\n\nA view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.'+
		'\n\nYou can add SQL functions, WHERE, and JOIN statements to a view and present the data as if the data were coming from one single table.'
	},{	
		task : '42. CREATE VIEW Syntax', 					
		solution : 'CREATE VIEW view_name AS'+
		'\nSELECT column1, column2, ...'+
		'\nFROM table_name'+
		'\nWHERE condition;'+
		"\n\nNote: A view always shows up-to-date data! The database engine recreates the data, using the view's SQL statement, every time a user queries a view."
	},{	
		task : '43. If you have the Northwind database you can see that it has several views installed by default.'+
		'The view "Current Product List" lists all active products (products that are not discontinued) from the "Products" table. ',
		solution : 'CREATE VIEW [Current Product List] AS'+
		'\nSELECT ProductID, ProductName'+
		'\nFROM Products'+
		'\nWHERE Discontinued = No;'+
		'\n\nThen, we can query the view as follows:'+
		'\n\nSELECT * FROM [Current Product List];'
	},{	
		task : '44. Another view in the Northwind sample database selects every product in the "Products" table with a unit price higher than the average unit price:', 					
		solution : 'CREATE VIEW [Products Above Average Price] AS'+
		'\nSELECT ProductName, UnitPrice'+
		'\nFROM Products'+
		'\nWHERE UnitPrice > (SELECT AVG(UnitPrice) FROM Products);'+
		'\nWe can query the view above as follows:'+
		'\nSELECT * FROM [Products Above Average Price];'
	},{	
		task : '45. Another view in the Northwind database calculates the total sale for each category in 1997. Note that this view selects its data from another view called "Product Sales for 1997":', 					
		solution : 'CREATE VIEW [Category Sales For 1997] AS'+
		'\nSELECT DISTINCT CategoryName, Sum(ProductSales) AS CategorySales'+
		'\nFROM [Product Sales for 1997]'+
		'\nGROUP BY CategoryName;'+
		'\n\nWe can query the view above as follows:'+
		'\n\nSELECT * FROM [Category Sales For 1997];'+
		"\n\nWe can also add a condition to the query. Let's see the total sale only for the category 'Beverages':"+
		'\n\nSELECT * FROM [Category Sales For 1997]'+
		"\nWHERE CategoryName = 'Beverages';"
	},{	
		task : '46. Updating a View Syntax', 					
		solution : 'CREATE OR REPLACE VIEW view_name AS'+
		'\nSELECT column1, column2, ...'+
		'\nFROM table_name'+
		'\nWHERE condition;'
	},{	
		task : '47. Add the "Category" column to the "Current Product List" view.', 					
		solution : 'CREATE OR REPLACE VIEW [Current Product List] AS'+
		'\nSELECT ProductID, ProductName, Category'+
		'\nFROM Products'+
		'\nWHERE Discontinued = No;'
	},{	
		task : '48. Delete a view', 					
		solution : 'DROP VIEW view_name;'
	},{	
		task : '49. What is Injection?', 					
		solution : 'SQL injection is a code injection technique that might destroy your database.'+
		'\n\nSQL injection is one of the most common web hacking techniques.'+
		'\n\nSQL injection is the placement of malicious code in SQL statements, via web page input.'
	},{	
		task : '', 					
		solution : ''
	},{	
		task : '', 					
		solution : ''
	}
]