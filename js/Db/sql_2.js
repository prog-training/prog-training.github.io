'use strict'	  
//https://www.w3schools.com/sql/sql_insert.asp
var sql_2 = 
[
	{	
		task : '50. Get all customers that are NOT located in "Germany", "France" or "UK".', 
		solution : "SELECT * FROM Customers\nWHERE Country NOT IN ('Germany', 'France', 'UK');"
	},{	
		task : '51. Get all customers that are from the same countries as the suppliers'+
		'<br/><br/>"Customers" table: <br/>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT * FROM Customers\nWHERE Country IN (SELECT Country FROM Suppliers);"
	},{		
		task : '52. Get all products with a price BETWEEN 10 and 20.', 
		solution : "SELECT * FROM Products\nWHERE Price BETWEEN 10 AND 20;"
	},{	
		task : '53. Get the products outside the range of price BETWEEN 10 and 20.', 
		solution : "SELECT * FROM Products\nWHERE Price NOT BETWEEN 10 AND 20;"
	},{	
		task : '54. Get all products with a price BETWEEN 10 and 20. In addition; do not show products with a CategoryID of 1,2, or 3.', 
		solution : "SELECT * FROM Products \nWHERE (Price BETWEEN 10 AND 20)\nAND NOT CategoryID IN (1,2,3);"
	},{
		task : "56. Get all products with a ProductName NOT BETWEEN 'Carnarvon Tigers' and 'Mozzarella di Giovanni'", 
		solution : "SELECT * FROM Products\nWHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'\nORDER BY ProductName;"
	},{	
		task : "57. Get all orders with an OrderDate BETWEEN '04-July-1996' and '09-July-1996'", 
		solution : "SELECT * FROM Orders\nWHERE OrderDate BETWEEN #07/04/1996# AND #07/09/1996#;"
	},{			
		task : '58. Create two aliases, one for the CustomerID column and one for the CustomerName column', 
		solution : "SELECT CustomerID as ID, CustomerName AS Customer\nFROM Customers;"
	},{	
		task : '59. Create two aliases, one for the CustomerName column and one for the ContactName column. Note: It requires double quotation marks or square brackets if the alias name contains spaces.', 
		solution : "SELECT CustomerName AS Customer, ContactName AS [Contact Person]\nFROM Customers;"
	},{	
		task : '60. Get CustomerName and create an alias named "Address" that combine four columns (Address, PostalCode, City and Country).', 
		solution : "SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address\nFROM Customers;\n\n"+
		"or\n\n" + "SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address\nFROM Customers;"
	},{	
		task : '61. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'Get all the orders and customer name from the customer with CustomerID=4 (Around the Horn).', 
		solution : 'We use the "Customers" and "Orders" tables, and give them the table aliases of "c" and "o" respectively (Here we use aliases to make the SQL shorter):\n\n'+
		'SELECT o.OrderID, o.OrderDate, c.CustomerName\nFROM Customers AS c, Orders AS o\nWHERE c.CustomerName="Around the Horn" AND c.CustomerID=o.CustomerID;'+
		'\n\nwithout aliases:SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName' +
		'\nFROM Customers, Orders\nWHERE Customers.CustomerName="Around the Horn" AND Customers.CustomerID=Orders.CustomerID;'
	},{	
		task : '62. "Orders" table: </br>OrderID	CustomerID	OrderDate </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Country </br></br>'+
		'Create SQL statement (that contains an INNER JOIN), that selects records that have matching values in both tables', 
		solution : "SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;"
	},{		
		task : '63. What is (INNER) JOIN?', 
		solution : "(INNER) JOIN: Returns records that have matching values in both tables."
	},{	
		task : '64. What is LEFT (OUTER) JOIN?', 
		solution : "LEFT (OUTER) JOIN: Return all records from the left table, and the matched records from the right table."
	},{	
		task : '65. What is RIGHT (OUTER) JOIN?', 
		solution : "RIGHT (OUTER) JOIN: Return all records from the right table, and the matched records from the left table."
	},{	
		task : '66. What is FULL (OUTER) JOIN?', 
		solution : "FULL (OUTER) JOIN: Return all records when there is a match in either left or right table"
	},{	
		task : '67. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'Get all order id with customer name.', 
		solution : "SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
	},{	
		task : '68. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'"Shippers" table: </br>ShipperID	ShipperName </br></br>'+
		'Get all orders with customer and shipper information.',  
		solution : "SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName \n"+
		'FROM ((Orders \n'+
		'INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID) \n'+
		'INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);'
	},{		
		task : '69. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country</br></br>'+
		'Get all customers, and any orders they have.',
		solution : "SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;\n\n"+
		"The result is NULL from the right side, if there is no match. The LEFT JOIN keyword returns all records from the left table (Customers), even if there are no matches in the right table (Orders)."
	},{	
		task : '70. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>' +
		'"Employees" table: </br>EmployeeID	LastName	FirstName	BirthDate	Photo </br></br>'+
		'Get all employees, and any orders they might have have placed', 
		solution : "SELECT Orders.OrderID, Employees.LastName, Employees.FirstName \nFROM Orders \nRIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID\nORDER BY Orders.OrderID;\n\n"+
		"The result is NULL from the left side, when there is no match. The RIGHT JOIN keyword returns all records from the right table (Employees), even if there are no matches in the left table (Orders)."
	},{	
		task : '71. "Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'"Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'Get all customers, and all orders.', 
		solution : "SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nFULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID\nORDER BY Customers.CustomerName;\n\n" +
		'The FULL OUTER JOIN keyword returns all the rows from the left table (Customers), and all the rows from the right table (Orders). If there are rows in "Customers" that do not have matches in "Orders", or if there are rows in "Orders" that do not have matches in "Customers", those rows will be listed as well.'
	},{	
		task : '72. "Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'Matche customers that are from the same city', 
		solution : "SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City\nFROM Customers A, Customers B\nWHERE A.CustomerID <> B.CustomerID\nAND A.City = B.City \nORDER BY A.City;\n\nSQL Self JOIN Example"
	},{	
		task : '73. Get all the different cities (only distinct values) from "Customers" and "Suppliers" </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		' "Suppliers" table: </br>SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City FROM Customers\nUNION\nSELECT City FROM Suppliers\nORDER BY City\n\nIf some customers or suppliers have the same city, each city will only be listed once, because UNION selects only distinct values. Use UNION ALL to also select duplicate values!;"
	},{	
		task : '74. Get all cities (duplicate values also) from "Customers" and "Suppliers". </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		' "Suppliers" table: </br>SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City FROM Customers\nUNION ALL\nSELECT City FROM Suppliers\nORDER BY City;"
	},{		
		task : '75. Get all the different German cities (only distinct values) from "Customers" and "Suppliers". </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		' "Suppliers" table: </br>SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City, Country FROM Customers\nWHERE Country='Germany'\nUNION\nSELECT City, Country FROM Suppliers\nWHERE Country='Germany'\nORDER BY City;"
	},{	
		task : '76. Get all German cities (duplicate values also) from "Customers" and "Suppliers". </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		' "Suppliers" table: </br>SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City, Country FROM Customers\nWHERE Country='Germany'\nUNION ALL\nSELECT City, Country FROM Suppliers\nWHERE Country='Germany'\nORDER BY City;"
	},{	
		task : '77. Get all customers and suppliers </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		' "Suppliers" table: </br>SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT 'Customer' As Type, ContactName, City, Country\nFROM Customers\nUNION\nSELECT 'Supplier', ContactName, City, Country\nFROM Suppliers;"
	},{	
		task : '78. What is  GROUP BY?', 
		solution : "The GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns."
	},{	
		task : '79. Get the number of customers in each country </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT COUNT(CustomerID), Country \nFROM Customers \nGROUP BY Country;"
	},{		
		task : '80. Get the number of customers in each country, sorted high to low </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nORDER BY COUNT(CustomerID) DESC;"
	},{	
		task : '81. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'And a selection from the "Shippers" table: </br>ShipperID	ShipperName </br></br>'+
		'Get the number of orders sent by each shipper', 
		solution : "SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders \nFROM Orders\nLEFT JOIN Shippers \nON Orders.ShipperID = Shippers.ShipperID\nGROUP BY ShipperName;"
	},{	
		task : '82. What is HAVING?', 
		solution : "The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions."
	},{	
		task : '83. "Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'Get the number of customers in each country. Only include countries with more than 5 customers.', 
		solution : "SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5;"
	},{	
		task : '84. Get the number of customers in each country, sorted high to low (Only include countries with more than 5 customers) </br></br>'+
		'"Customers" table: </br>CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5\nORDER BY COUNT(CustomerID) DESC;"
	},{	
		task : '85. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'"Employees" table: </br>EmployeeID	LastName	FirstName	BirthDate	Photo	Notes</br></br>'+
		'Get the employees that have registered more than 10 orders', 
		solution : "SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders\nFROM (Orders\nINNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)\nGROUP BY LastName\nHAVING COUNT(Orders.OrderID) > 10;"
	},{	
		task : '86. "Orders" table: </br>OrderID	CustomerID	EmployeeID	OrderDate	ShipperID </br></br>'+
		'"Employees" table: </br>EmployeeID	LastName	FirstName	BirthDate	Photo	Notes </br></br>'+
		'Get  if the employees "Davolio" or "Fuller" have registered more than 25 orders', 
		solution : "SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders\nFROM Orders\nINNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID\nWHERE LastName = 'Davolio' OR LastName = 'Fuller'\nGROUP BY LastName\nHAVING COUNT(Orders.OrderID) > 25;"
	},{		
		task : '87. What is EXISTS?', 
		solution : "The EXISTS operator is used to test for the existence of any record in a subquery. The EXISTS operator returns true if the subquery returns one or more records.\n"+
		'\nEXISTS Syntax: \n\nSELECT column_name(s) \nFROM table_name \nWHERE EXISTS \n(SELECT column_name FROM table_name WHERE condition);'
	},{	
		task : '88. "Products" table: </br>ProductID	ProductName	SupplierID	CategoryID	Unit	Price </br></br>'+
		'"Suppliers" table: </br>SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'Get are the suppliers with a product price less than 20 existing', 
		solution : "SELECT SupplierName\nFROM Suppliers\nWHERE EXISTS (\n\tSELECT ProductName FROM Products \n\tWHERE SupplierId = Suppliers.supplierId AND Price < 20);"
	},{	
		task : '89. "Products" table: </br>ProductID	ProductName	SupplierID	CategoryID	Unit	Price </br></br>'+
		'"Suppliers" table: </br>SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country </br></br>'+
		'Get are the suppliers with a product price equal to 22 existing',
		solution : 'SELECT SupplierName \nFROM Suppliers \nWHERE EXISTS\n'+
		'(SELECT Price FROM Products \nWHERE SupplierId = Suppliers.supplierId AND Price = 22);'
	},{	
		task : '90. 1. "Products" table: </br>ProductID	ProductName	SupplierID	CategoryID	Unit	Price </br></br>'+
		'"OrderDetails" table: </br>OrderDetailID	OrderID	ProductID	Quantity </br></br>'+
		'Get the productnames if it finds ANY records  in the OrderDetails table that quantity = 10', 
		solution : "SELECT ProductName\nFROM Products\nWHERE ProductID = ANY ( \n\tSELECT ProductID FROM OrderDetails \n\tWHERE Quantity = 10);"
	},{	
		task : '91. 2. "Products" table: </br>ProductID	ProductName	SupplierID	CategoryID	Unit	Price </br></br>'+
		'"OrderDetails" table: </br>OrderDetailID	OrderID	ProductID	Quantity </br></br>'+
		' Get the productnames if it finds ANY records in the OrderDetails table that quantity > 99:', 
		solution : "SELECT ProductName\nFROM Products\nWHERE ProductID = ANY (\n\tSELECT ProductID FROM OrderDetails \n\tWHERE Quantity > 99);"
	},{	
		task : '92. 3. "Products" table: <br />ProductID	ProductName	SupplierID	CategoryID	Unit	Price<br /><br />'+
		'"OrderDetails" table:<br />OrderDetailID	OrderID	ProductID	Quantity<br /><br />'+
		'Get the productnames if ALL the records in the OrderDetails table has quantity = 10', 
		solution : "4. SELECT ProductName\nFROM Products\nWHERE ProductID = ALL (\n\tSELECT ProductID FROM OrderDetails \n\tWHERE Quantity = 10);"
	},{		
		task : '93. What is SELECT INTO?', 
		solution : "The SELECT INTO statement copies data from one table into a new table. \n\n"+
		'SELECT INTO Syntax: \n\n'+
		'SELECT * \nINTO newtable [IN externaldb] \nFROM oldtable \nWHERE condition; \n\n'+
		'Copy only some columns into a new table: \n\n'+
		'SELECT column1, column2, column3, ... \nINTO newtable [IN externaldb] \nFROM oldtable \nWHERE condition;'
	},{	
		task : '94. Create a backup copy of Customers', 
		solution : "SELECT * INTO CustomersBackup2017\nFROM Customers;"
	},{	
		task : '95. Copy the table into a new table in another database', 
		solution : "SELECT * INTO CustomersBackup2017 IN 'Backup.mdb'\nFROM Customers;"
	},{	
		task : '96. Copy only a few columns into a new table', 
		solution : "SELECT CustomerName, ContactName INTO CustomersBackup2017\nFROM Customers;"
	},{	
		task : '97. Copy only the German customers into a new table', 
		solution : "SELECT * INTO CustomersGermany\nFROM Customers\nWHERE Country = 'Germany';"
	},{	
		task : '98. Copy data from more than one table into a new table', 
		solution : "SELECT Customers.CustomerName, Orders.OrderID\nINTO CustomersOrderBackup2017\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;"
	},{		
		task : '99. Create a new, empty table using the schema of another.', 
		solution : "SELECT * INTO newtable\nFROM oldtable\nWHERE 1 = 0;"
	},{	
		task : '100. What is INSERT INTO SELECT?', 
		solution : 'The INSERT INTO SELECT statement copies data from one table and inserts it into another table.'+
		'\n\nINSERT INTO SELECT requires that:'+
		'\n\t- data types in source and target tables match;'+
		'\n\t- the existing records in the target table are unaffected.'+
		'\n\nINSERT INTO SELECT Syntax:'+
		'\n\nINSERT INTO table2 \nSELECT * FROM table1 \nWHERE condition;'+
		'\n\nCopy only some columns from one table into another table:'+
		'\n\nINSERT INTO table2 (column1, column2, column3, ...)'+
		'\nSELECT column1, column2, column3, ... \nFROM table1 \nWHERE condition;'
	},{	
		task : '100a. "Customers" table:<br />CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country<br /><br />'+
		'"Suppliers" table:<br />SupplierID	SupplierName	ContactName	Address	City	Postal Code	Country<br /><br />'+
		'Copy "Suppliers" into "Customers" (the columns that are not filled with data, will contain NULL)', 
		solution : "INSERT INTO Customers (CustomerName, City, Country)\nSELECT SupplierName, City, Country \nFROM Suppliers;"
	},{	
		task : '101. "Customers" table:<br />CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country<br /><br />'+
		'"Suppliers" table:<br />SupplierID	SupplierName	ContactName	Address	City	PostalCode	Country<br /><br />'+
		'Copy "Suppliers" into "Customers" (fill all columns)', 
		solution : "INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nSELECT SupplierName, ContactName, Address, City, PostalCode, Country \nFROM Suppliers;"
	},{	
		task : '102. "Customers" table:<br />CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country<br /><br />'+
		'"Suppliers" table:<br />SupplierID	SupplierName	ContactName	Address	City	Postal Code	Country<br /><br /><br />'+
		'Copy only the German suppliers into "Customers', 
		solution : "INSERT INTO Customers (CustomerName, City, Country)\nSELECT SupplierName, City, Country FROM Suppliers\nWHERE Country='Germany';"
	},{	
		task : '103. Single Line Comments, Multi-line Comments, To ignore just a part of a statement', 
		solution : "SELECT * FROM Customers -- WHERE City='Berlin';\n\n"+
		'/*Select all the columns\nall the records\nin the Customers table:*/\nSELECT * FROM Customers;\n\n'+
		'SELECT CustomerName, /*City,*/ Country FROM Customers;'
	}	
];