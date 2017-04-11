'use strict'	  
//https://www.w3schools.com/sql/sql_insert.asp
var sql_tasks = 
[
	{	
		task : "1. Table:Customers <br />customer_id  name  surname  city <br /><br />"+
		'Table:Orders<br />order_id  customer_id  order_date  amount <br /><br />'+
		'Write sql query for retrieve all customers that don’t have orders.',
		
		solution : "select Customers.name, Customers.surname, Customers.city from Customers\nleft join Orders \non Customers.customer_id = Orders.customer_id\nwhere Orders.order_id is null;"
	},{	
		task : "2. Есть таблица table1 с колонками id и datetime написать запрос который вернет максимальное значение id и значение даты для этого id", 			
		
		solution : "SELECT id,datetime FROM table1 \nwhere id = (SELECT max(id) FROM table1  ); \n\n"+ 
 		"SELECT id,datetime FROM table1 \n"+
		"where id in (SELECT max(id) FROM table1  ); \n\n"+
		"можно и так \nSELECT id,datetime FROM table1  \nORDER BY id DESC \nSELECT TOP 1"
	},{		
		task : `4. `, 			
		
		solution : 
		``
	},{	
		task : `5. `, 			
		
		solution : 
		``
	},{	
		task : `6. `, 			
		
		solution : 
		``
	}
]