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
		task : '27a. Get the first three records from the "Customers" table, where the country is "Germany".', 
		solution : "SELECT TOP 3 * FROM Customers\nWHERE Country='Germany';"
	},{	
		task : '27b. Find the price of the cheapest product.', 
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
	}
];