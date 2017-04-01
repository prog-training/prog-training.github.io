'use strict'	  
//https://www.w3schools.com/sql/sql_insert.asp
var sql_1 = 
[
	{	
		task : "1. What is SQL?", 			
		
		solution : "Structured Query Language."
	},{	
		task : '2. What is RDBMS?', 
		solution : 'Relational Database Management System.'
	},{	
		task : '3. Get the "CustomerName" and "City" columns from the "Customers" table.', 
		solution : 'SELECT CustomerName, City FROM Customers;'
	},{	
		task : '4. Get only the DISTINCT values from the "Country" column in the "Customers" table.', 
		solution : 'SELECT DISTINCT Country FROM Customers;'
	},{	
		task : '5. Get the number of different (distinct) customer countries.', 
		solution : 'SELECT COUNT(DISTINCT Country) FROM Customers;'
	},{	
		task : '6. Get all the customers from the country "Mexico", in the "Customers" table.', 
		solution : 'SELECT * FROM Customers\nWHERE Country=\'Mexico\';'
	},{	
		task : '7. Get all fields from "Customers" where country is "Germany" AND city is "Berlin".', 
		solution : 'SELECT * FROM Customers\nWHERE Country=\'Germany\' AND City=\'Berlin\';'
	},{	
		task : '8. Get all fields from "Customers" where city is "Berlin" OR "München".', 
		solution : 'SELECT * FROM Customers\nWHERE City=\'Berlin\' OR City=\'München\';'
	},{	
		task : '9. Get all fields from "Customers" where country is NOT "Germany".', 
		solution : 'SELECT * FROM Customers\nWHERE NOT Country=\'Germany\';'
	},{	
		task : '10. Get all fields from "Customers" where country is "Germany" AND city must be "Berlin" OR "München" (use parenthesis to form complex expressions)', 
		solution : 'SELECT * FROM Customers\nWHERE Country=\'Germany\' AND (City=\'Berlin\' OR City=\'München\');'
	},{	
		task : '11. Get all fields from "Customers" where country is NOT "Germany" and NOT "USA".', 
		solution : 'SELECT * FROM Customers\nWHERE NOT Country=\'Germany\' AND NOT Country=\'USA\';'
	},{	
		task : '12. Get all customers from the "Customers" table, sorted by the "Country" column.', 
		solution : 'SELECT * FROM Customers\nORDER BY Country;'
	},{	
		task : '13. Get all customers from the "Customers" table, sorted DESCENDING by the "Country" column.', 
		solution : 'SELECT * FROM Customers\nORDER BY Country DESC;'
	},{	
		task : '14. Get all customers from the "Customers" table, sorted by the "Country" and the "CustomerName" column.', 
		solution : 'SELECT * FROM Customers\nORDER BY Country, CustomerName;'
	},{	
		task : '15. Get all customers from the "Customers" table, sorted ascending by the "Country" and descending by the "CustomerName" column.', 
		solution : 'SELECT * FROM Customers\nORDER BY Country ASC, CustomerName DESC;'
	},{	
		task : '16. Inserts a new record in the "Customers" table.', 
		solution : 'INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\n'+
		"VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');"
	},{	
		task : '17. Insert a new record, but only insert data in the "CustomerName", "City", and "Country" columns (CustomerID will be updated automatically).', 
		solution : "INSERT INTO Customers (CustomerName, City, Country)\nVALUES ('Cardinal', 'Stavanger', 'Norway');"
	},{	
		task : '18. Get all persons that have no address.', 
		solution : 'SELECT LastName, FirstName, Address FROM Persons\nWHERE Address IS NULL;'
	},{	
		task : '19. Get all persons that do have an address.', 
		solution : 'SELECT LastName, FirstName, Address FROM Persons\nWHERE Address IS NOT NULL;'
	},{	
		task : '20. Update the first customer (CustomerID = 1) with a new contact name and a new city.', 
		solution : 'UPDATE Customers\nSET ContactName = \'Alfred Schmidt\', City= \'Frankfurt\'\nWHERE CustomerID = 1;'
	},{	
		task : '21. Update the contactname to "Juan" for all records where country is "Mexico".', 
		solution : "UPDATE Customers\nSET ContactName='Juan'\nWHERE Country='Mexico';"
	},{	
		task : '22. Update the contactname to "Juan" for ALL records.', 
		solution : 'UPDATE Customers\nSET ContactName=\'Juan\';'
	},{	
		task : '23. Delete the customer "Alfreds Futterkiste" from the "Customers" table.',
		solution : "DELETE FROM Customers\nWHERE CustomerName='Alfreds Futterkiste';"
	},{	
		task : '24. Delete all rows in a table without deleting the table.', 
		solution : 'DELETE FROM table_name;\nor\nDELETE * FROM table_name;'
	},{	
		task : '25. Get the first three records from the "Customers" table.', 
		solution : 'SELECT TOP 3 * FROM Customers;'
	},{	
		task : "26. Get the first 50% of the records from the \"Customers\" table.", 
		solution : "SELECT TOP 50 PERCENT * FROM Customers;"
	},{	
		task : 'Get the first three records from the "Customers" table, where the country is "Germany".', 
		solution : "SELECT TOP 3 * FROM Customers\nWHERE Country='Germany';"
	},{	
		task : '27. Find the price of the cheapest product.', 
		solution : "SELECT MIN(Price) AS SmallestPrice\nFROM Products;"
	},{	
		task : '28. Find the price of the most expensive product.', 
		solution : "SELECT MAX(Price) AS LargestPrice\nFROM Products;"
	},{	
		task : '29. Find the number of products.', 
		solution : "SELECT COUNT(ProductID)\nFROM Products;"
	},{	
		task : '30. Find the average price of all products.', 
		solution : "SELECT AVG(Price)\nFROM Products;"
	},{	
		task : '31. Find the sum of the "Quantity" fields in the "OrderDetails" table.', 
		solution : "SELECT SUM(Quantity)\nFROM OrderDetails;"
	},{	
		task : '32. Get all customers with a CustomerName starting with "a".', 
		solution : "SELECT * FROM Customers\nWHERE CustomerName LIKE 'a%';"
	},{	
		task : '33. Get all customers with a CustomerName ending with "a".', 
		solution : "SELECT * FROM Customers\nWHERE CustomerName LIKE '%a';"
	},{	
		task : '34. Get all customers with a CustomerName that have "or" in any position.', 
		solution : "SELECT * FROM Customers\nWHERE CustomerName LIKE '%or%';"
	},{	
		task : '35. Get all customers with a CustomerName that have "r" in the second position.', 
		solution : "SELECT * FROM Customers\nWHERE CustomerName LIKE '_r%';"
	},{	
		task : '36. Get all customers with a CustomerName that starts with "a" and are at least 3 characters in length.', 
		solution : "SELECT * FROM Customers\nWHERE CustomerName LIKE 'a_%_%';"
	},{
		task : '37. Get all customers with a CustomerName that starts with "a" and ends with "o".', 
		solution : "SELECT * FROM Customers\nWHERE ContactName LIKE 'a%o';"
	},{	
		task : '38. Get all customers with a CustomerName that NOT starts with "a".', 
		solution : "SELECT * FROM Customers\nWHERE CustomerName NOT LIKE 'a%';"
	},{	
		task : '39. What is wildcard % ?', 
		solution : "The percent sign represents zero, one, or multiple characters."
	},{	
		task : '40. What is wildcard _ ?', 
		solution : "The underscore represents a single character."
	},{
		task : '41. Get all customers with a City starting with "ber".', 
		solution : "SELECT * FROM Customers\nWHERE City LIKE 'ber%';"
	},{	
		task : '42. Get all customers with a City containing the pattern "es"', 
		solution : "SELECT * FROM Customers\nWHERE City LIKE '%es%';"
	},{	
		task : '43. Get all customers with a City starting with any character, followed by "erlin".', 
		solution : "SELECT * FROM Customers\nWHERE City LIKE '_erlin';"
	},{	
		task : '44. Get all customers with a City starting with "L", followed by any character, followed by "n", followed by any character, followed by "on".', 
		solution : "SELECT * FROM Customers\nWHERE City LIKE 'L_n_on';"
	},{	
		task : '45. Get all customers with a City starting with "b", "s", or "p".', 
		solution : "SELECT * FROM Customers\nWHERE City LIKE '[bsp]%';"
	},{	
		task : '46. Get all customers with a City starting with "a", "b", or "c".', 
		solution : "SELECT * FROM Customers\nWHERE City LIKE '[a-c]%';"
	},{	
		task : '47. Get all customers with a City NOT starting with "b", "s", or "p".', 
		solution : "SELECT * FROM Customers\nWHERE City LIKE '[!bsp]%';\nor\n"+
		"SELECT * FROM Customers\nWHERE City NOT LIKE '[bsp]%';"
	},{	
		task : '48. Get all customers that are located in "Germany", "France" and "UK".', 
		solution : "SELECT * FROM Customers\nWHERE Country IN ('Germany', 'France', 'UK');"
	},{	
		task : '49. What is IN operator?', 
		solution : "The IN operator allows you to specify multiple values in a WHERE clause.\nThe IN operator is a shorthand for multiple OR conditions."
	},{	
		task : '50. Get all customers that are NOT located in "Germany", "France" or "UK".', 
		solution : "SELECT * FROM Customers\nWHERE Country NOT IN ('Germany', 'France', 'UK');"
	},{	
		task : '51. Get all customers that are from the same countries as the suppliers', 
		solution : "SELECT * FROM Customers\nWHERE Country IN (SELECT Country FROM Suppliers);"
	},{		
		task : '52. Get all products with a price BETWEEN 10 and 20.', 
		solution : "SELECT * FROM Products\nWHERE Price BETWEEN 10 AND 20;"
	},{	
		task : '53. Get the products outside the range of price BETWEEN 10 and 20.', 
		solution : "SELECT * FROM Products\nWHERE Price NOT BETWEEN 10 AND 20;"
	},{	
		task : '54. Get all products with a price BETWEEN 10 and 20. In addition; do not show products with a CategoryID of 1,2, or 3.', 
		solution : "SELECT * FROM Products/nWHERE (Price BETWEEN 10 AND 20)/nAND NOT CategoryID IN (1,2,3);"
	},{	
		task : "55. Get all products with a ProductName BETWEEN 'Carnarvon Tigers' and 'Mozzarella di Giovanni", 
		solution : "SELECT * FROM Products\nWHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'\nORDER BY ProductName;"
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
		task : '60. Create an alias named "Address" that combine four columns (Address, PostalCode, City and Country).', 
		solution : "SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address\nFROM Customers;"+
		"or\n" + "SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address\nFROM Customers;"
	},{	
		task : '61. Get all the orders from the customer with CustomerID=4 (Around the Horn).', 
		solution : 'We use the "Customers" and "Orders" tables, and give them the table aliases of "c" and "o" respectively (Here we use aliases to make the SQL shorter):\n\n'+
		'SELECT o.OrderID, o.OrderDate, c.CustomerName\nFROM Customers AS c, Orders AS o\nWHERE c.CustomerName="Around the Horn" AND c.CustomerID=o.CustomerID;'+
		'\n\nwithout aliases:SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName' +
		'\nFROM Customers, Orders\nWHERE Customers.CustomerName="Around the Horn" AND Customers.CustomerID=Orders.CustomerID;'
	},{	
		task : '"62. Orders" table: OrderID	CustomerID	OrderDate\n'+
		'"Customers" table: CustomerID	CustomerName	ContactName	Country\n'+
		'Create SQL statement (that contains an INNER JOIN), that selects records that have matching values in both tables'+
		'Orders.OrderID, Customers.CustomerName, Orders.OrderDate.', 
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
		task : '67. "Orders" table:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		'Get all orders with customer information.', 
		solution : "SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
	},{	
		task : '68. "Orders" table:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		'"Shippers" table:\nCustomerID	ShipperName\n'+
		'Get all orders with customer and shipper information.',  
		solution : "solution"
	},{		
		task : '69. "Orders" table:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		'Get all customers, and any orders they might have.',
		solution : "SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;\n\n"+
		"The result is NULL from the right side, if there is no match. The LEFT JOIN keyword returns all records from the left table (Customers), even if there are no matches in the right table (Orders)."
	},{	
		task : '70. "Orders" table:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n' +
		'"Employees" table:\nEmployeeID	LastName	FirstName	BirthDate	Photo\n'+
		'Get all employees, and any orders they might have have placed', 
		solution : "SELECT Orders.OrderID, Employees.LastName, Employees.FirstName\nRIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID/nORDER BY Orders.OrderID;\n\n"+
		"The result is NULL from the left side, when there is no match. The RIGHT JOIN keyword returns all records from the right table (Employees), even if there are no matches in the left table (Orders)."
	},{	
		task : '71. "Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		'"Orders" table:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n'+
		'Get all customers, and all orders.', 
		solution : "SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nFULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID\nORDER BY Customers.CustomerName;\n\n" +
		'The FULL OUTER JOIN keyword returns all the rows from the left table (Customers), and all the rows from the right table (Orders). If there are rows in "Customers" that do not have matches in "Orders", or if there are rows in "Orders" that do not have matches in "Customers", those rows will be listed as well.'
	},{	
		task : '72. "Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		'Matche customers that are from the same city', 
		solution : "SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City\nFROM Customers A, Customers B\nWHERE A.CustomerID <> B.CustomerID\nAND A.City = B.City \nORDER BY A.City;\n\nSQL Self JOIN Example"
	},{	
		task : '73. Get all the different cities (only distinct values) from "Customers" and "Suppliers"'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		' "Suppliers" table:\nSupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City FROM Customers\nUNION\nSELECT City FROM Suppliers\nORDER BY City\n\nIf some customers or suppliers have the same city, each city will only be listed once, because UNION selects only distinct values. Use UNION ALL to also select duplicate values!;"
	},{	
		task : '74. Get all cities (duplicate values also) from "Customers" and "Suppliers".'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		' "Suppliers" table:\nSupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City FROM Customers\nUNION ALL\nSELECT City FROM Suppliers\nORDER BY City;"
	},{		
		task : '75. Get all the different German cities (only distinct values) from "Customers" and "Suppliers.'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		' "Suppliers" table:\nSupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City, Country FROM Customers\nWHERE Country='Germany'\nUNION\nSELECT City, Country FROM Suppliers\nWHERE Country='Germany'\nORDER BY City;"
	},{	
		task : '76. Get all German cities (duplicate values also) from "Customers" and "Suppliers".'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		' "Suppliers" table:\nSupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT City, Country FROM Customers\nWHERE Country='Germany'\nUNION ALL\nSELECT City, Country FROM Suppliers\nWHERE Country='Germany'\nORDER BY City;"
	},{	
		task : '77. Get all customers and suppliers \n'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		' "Suppliers" table:\nSupplierID	SupplierName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT 'Customer' As Type, ContactName, City, Country\nFROM Customers\nUNION\nSELECT 'Supplier', ContactName, City, Country\nFROM Suppliers;"
	},{	
		task : '78. What is  GROUP BY?', 
		solution : "The GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns."
	},{	
		task : '79. Get the number of customers in each country\n'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT COUNT(CustomerID), Country\nGROUP BY Country;"
	},{		
		task : '80. Get the number of customers in each country, sorted high to low\n'+
		'"Customers" table:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country', 
		solution : "SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nORDER BY COUNT(CustomerID) DESC;"
	},{	
		task : '81. "Orders" table:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n'+
		'Get the number of orders sent by each shipper', 
		solution : "SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders\nLEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID\nGROUP BY ShipperName;"
	},{	
		task : '82. What is HAVING?', 
		solution : "The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions."
	},{	
		task : '83. "Customers" table in the Northwind sample database:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n'+
		'Get the number of customers in each country. Only include countries with more than 5 customers.', 
		solution : "SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5;"
	},{	
		task : '84. Get the number of customers in each country, sorted high to low (Only include countries with more than 5 customers)\n'+
		'"Customers" table in the Northwind sample database:\nCustomerID	CustomerName	ContactName	Address	City	PostalCode	Country\n', 
		solution : "SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5\nORDER BY COUNT(CustomerID) DESC;"
	},{	
		task : '85. "Orders" table in the Northwind sample database:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n'+
		'"Employees" table:\nEmployeeID	LastName	FirstName	BirthDate	Photo	Notes\n'+
		'Get the employees that have registered more than 10 orders', 
		solution : "SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders\nFROM (Orders\nINNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)\nGROUP BY LastName\nHAVING COUNT(Orders.OrderID) > 10;"
	},{	
		task : '86. "Orders" table in the Northwind sample database:\nOrderID	CustomerID	EmployeeID	OrderDate	ShipperID\n'+
		'"Employees" table:\nEmployeeID	LastName	FirstName	BirthDate	Photo	Notes\n'+
		'Get  if the employees "Davolio" or "Fuller" have registered more than 25 orders', 
		solution : "SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders\nFROM Orders\nINNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID\nWHERE LastName = 'Davolio' OR LastName = 'Fuller'\nGROUP BY LastName\nHAVING COUNT(Orders.OrderID) > 25;"
	},{		
		task : '87. What is EXISTS?', 
		solution : "The EXISTS operator is used to test for the existence of any record in a subquery. The EXISTS operator returns true if the subquery returns one or more records."
	},{	
		task : '88. "Products" table:\nProductID	ProductName	SupplierID	CategoryID	Unit	Price\n'+
		'"Suppliers" table:\nSupplierID	SupplierName	ContactName	Address	City	PostalCode	Country\n'+
		'Get are the suppliers with a product price less than 20 existing', 
		solution : "SELECT SupplierName\nFROM Suppliers\nWHERE EXISTS (SELECT ProductName FROM Products WHERE SupplierId = Suppliers.supplierId AND Price < 20);"
	},{	
		task : '89. "Products" table:\nProductID	ProductName	SupplierID	CategoryID	Unit	Price\n'+
		'"Suppliers" table:\nSupplierID	SupplierName	ContactName	Address	City	PostalCode	Country\n'+
		'Get are the suppliers with a product price equal to 22 existing',
		solution : "solution"
	},{	
		task : '90. 1. "Products" table in the Northwind sample database:\nProductID	ProductName	SupplierID	CategoryID	Unit	Price\n'+
		'"OrderDetails" table:\nOrderDetailID	OrderID	ProductID	Quantity\n'+
		'? in the OrderDetails table that quantity = 10', 
		solution : "SELECT ProductName\nFROM Products\nWHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);"
	},{	
		task : '91. 2. "Products" table in the Northwind sample database:\nProductID	ProductName	SupplierID	CategoryID	Unit	Price\n'+
		'"OrderDetails" table:\nOrderDetailID	OrderID	ProductID	Quantity\n'+
		'records in the OrderDetails table that quantity > 99:', 
		solution : "SELECT ProductName\nFROM Products\nWHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity > 99);"
	},{	
		task : '92. 3. "Products" table <br />ProductID	ProductName	SupplierID	CategoryID	Unit	Price<br /><br />'+
		'"OrderDetails" table:<br />OrderDetailID	OrderID	ProductID	Quantity<br /><br />'+
		'? in the OrderDetails table has quantity = 10', 
		solution : "4. SELECT ProductName\nFROM Products\nWHERE ProductID = ALL (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);"
	},{		
		task : '93. What is SELECT INTO?', 
		solution : "The SELECT INTO statement copies data from one table into a new table."
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
		task : '100. "Customers" table:<br />CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country<br /><br />'+
		'"Suppliers" table:<br />SupplierID	SupplierName	ContactName	Address	City	Postal Code	Country<br /><br />'+
		'Copy "Suppliers" into "Customers" (the columns that are not filled with data, will contain NULL)', 
		solution : "INSERT INTO Customers (CustomerName, City, Country)\nSELECT SupplierName, City, Country FROM Suppliers;"
	},{	
		task : '101. "Customers" table:<br />CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country<br /><br />'+
		'"Suppliers" table:<br />SupplierID	SupplierName	ContactName	Address	City	Postal Code	Country<br /><br />'+
		'Copy "Suppliers" into "Customers" (fill all columns)', 
		solution : "INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nSELECT SupplierName, ContactName, Address, City, PostalCode, Country FROM Suppliers;"
	},{	
		task : '102. "Customers" table:<br />CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country<br /><br />'+
		'"Suppliers" table:<br />SupplierID	SupplierName	ContactName	Address	City	Postal Code	Country<br /><br /><br />'+
		'Copy only the German suppliers into "Customers', 
		solution : "INSERT INTO Customers (CustomerName, City, Country)\nSELECT SupplierName, City, Country FROM Suppliers\nWHERE Country='Germany';"
	},{	
		task : '103. Single Line Comments, Multi-line Comments, To ignore just a part of a statement', 
		solution : "SELECT * FROM Customers -- WHERE City='Berlin';\n"+
		'/*Select all the columns\nall the records\nin the Customers table:*/\nSELECT * FROM Customers;\n'+
		'SELECT CustomerName, /*City,*/ Country FROM Customers;'
	}	
];