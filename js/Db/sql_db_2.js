'use strict'	  
//https://www.w3schools.com/sql/sql_insert.asp
var sql_db_2 = 
[
	{	
		task : "1. Первые 3 нормальные формы", 		
		solution : "1) Все данные атомарны."+
		'\n\n2) Отсутствие частичных функциональных зависимостей. \n   (отсутствие зависимости неключевых полей от части составного ключа)'+
		'\n\n3) Отсутствие транзитивных функциональных зависимостей. \n   (исключает зависимость неключевых полей от других неключевых полей)'
	},{		
		task : "2. Транзакция?", 		
		solution : "В программировании баз данных транзакция это последовательность изменений, вносимых в базу данных. Как и в случае с банковскими картами, транзакция может быть одобрена (Commit) или отменена по какой-либо причине (Rollback), например, если на каком-то этапе транзакции система попыталась разделить на ноль или внести в базу данных некорректную информацию."+
		'\n\nТранзакция (от английского transaction — сделка) это, в широком смысле, серия операций по обмену информацией, в результате которой в систему вносятся изменения.'+
		'\n\nЗапрос – выполнение задания – ответ. \nЭто распрастранение изменения в БД с контролем его выполнения.'
	},{		
		task : "3. ACID?", 		
		solution : 
		'Atomicity - Атомарность'+
		'\n\n\tАтомарность гарантирует, что любая транзакция будет зафиксирована только целиком (полностью). Если одна из операций в последовательности не будет выполнена, то вся транзакция будет отменена. Тут вводится понятие “отката” (rollback). Т.е. внутри последовательности будут происходить определённые изменения, но по итогу все они будут отменеы (“откачены”) и по итогу пользователь не увидит никаких изменений.'+

		'\n\nConsistency - Согласованность'+
		'\n\n\tЭто означает, что любая завершённая транзакция (транзакция, которая достигла завершения транзакции – end of transaction) фиксирует только допустимые результаты. Например, при переводе денег с одного счёта на другой, в случае, если деньги ушли с одного счёта, они должны прийти на другой (это и есть согласованность системы). Списание и зачисление  – это две разные транзакции. Поэтому если первая транзакция пройдёт без ошибок, а второй просто не будет, то нарушится баланс системы.'+

		'\n\nIsolation - Изолированность'+
		'\n\n\tКаждая транзакция должна быть изолирована от других, т.е. её результат не должен зависеть от выполнения других параллельных транзакций. На практике, изолированность крайне труднодостижимая вещь, поэтому здесь вводится понятие “уровни изолированности” (транзакция изолируется не полностью).'+

		'\n\nDurability - Долговечность'+
		'\n\n\tЭта концепция гарантирует, что если мы получили потверждение о выполнении транзакции, то изменения, вызванные этой транзакцией не должны быть отменены из-за сбоя системы (например, отключение электропитания).'
	},{		
		task : `4. Как откатить миграцию?`, 			
		
		solution : 
`Step 1: Restore to a previous migration

Use the Get-Migrations command to get a list of the migration names that have been applied to your database.

PM> Get-Migrations
Retrieving migrations that have been applied to the target database.
201508242303096_Bad_Migration
201508211842590_The_Migration_applied_before_it
201508211440252_And_another

Update-Database –TargetMigration: "<the migration applied before it>"


Step 2: Delete your migration from the project

Now you can delete the bad migration from your EF project 'Migrations' folder`
	},{		
		task : `5. Adding a Property to the Model (EF)
		<br/>(don't need to drop the database)`, 		
		solution : 
`
  - CTRL-SHIFT-B 
  - Package Manager Console
=== add-migration migtationName ===
    (Visual Studio opens the class file that defines the new DbMIgration )
  - CTRL-SHIFT-B
=== update-database ===
  - Re-run the application`
	},{		
		task : `6. Setting up Code First Migrations for Model Changes.`, 		
		solution : 
`  - remove the database
  - CTRL-SHIFT-B  
  - Package Manager Console
=== Enable-Migrations -ContextTypeName BookArt.Models.SectionDBContext ===

  - Replace the SEED method in the Configuration.cs file

  - CTRL-SHIFT-B 
=== add-migration Seed1 -verbose ===
=== update-database ===
    (If you get an error that indicates a table already exists )`
	},{		
		task : ``, 		
		solution : ``

	},{		
		task : ``, 		
		solution : ``

	},{		
		task : ``, 		
		solution : ``

	},{		
		task : ``, 		
		solution : ``

	}
]