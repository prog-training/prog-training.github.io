'use strict'
//http://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html
//https://www.youtube.com/watch?v=MBBWVgE0ewk
var cmd = 
[
	{	
		task : 
`1.  View the contents of a directory 
<br/>C:\\>`,

		solution : 
`dir`
	},
	{	
		task : 
`2.  Know in which directory you are currently working 
<br/>C:\\>`,

		solution : 
`cd`
	},
	{	
		task : 
`3. Change directories to nameNewDir 
<br/>C:\\>`,

		solution : 
`cd nameNewDir`
	},
	{	
		task : 
`4. Create a new directory newDirectoryName,
<br/>see that it actually worked
<br/>C:\\>`,

		solution : 
`mkdir newDirectoryName

dir`
	},
	{	
		task : 
`5. Move the two files HelloWorld.java and readme.txt into the hello directory
<br/>C:\\>`,

		solution : 
`move HelloWorld.java hello
move readme.txt hello
dir`
	},
	{	
		task : 
`6. Rename a file temp.java as HelloWorld.java
<br/>C:\\>`,

		solution : 
`move temp.java HelloWorld.java`
	},
	{	
		task : 
`7. Make a copy of a file  
<br/>C:\\>`,

		solution : 
`copy HelloWorld.java HelloWorld.bak
dir`
	},
	{	
		task : 
`8. Deletes a file  
<br/>C:\\>`,

		solution : 
`del HelloWorld.bak
dir`
	},
	{	
		task : 
`9. Create a new directory called loops, 
and copy all of the files in the hello directory 
<br/>C:\\introcs\\hello\\
<br/>into this newly created directory type:  
<br/>C:\\>`,

		solution : 
`mkdir loops
copy c:\\introcs\\hello\\* loops
cd loops
dir`
	},
	{	
		task : 
`10. Take me to the parent directory
<br/>C:\\>`,

		solution : 
`cd ..`
	},
	{	
		task : 
`11. Go up two steps
<br/>C:\\>`,

		solution : 
`cd ../..`
	},
	{	
		task : 
`12.  Clone a remote repository onto your local machine (current directory)
<br/>C:\\>`,

		solution : 
`git clone ...

git clone --depth=16 https://github.com/angular/angular-phonecat.git

The --depth=16 option tells Git to pull down only the last 16 commits. This makes the download much smaller and faster.`
	},
	{	
		task : 
`13. Check out a particular branch or a tagged version of the code to hack on.
<br/>C:\\>`,

		solution : 
`git checkout ...`
	},
	{	
		task : 
`14. Check the version of Node.js that you have installed
<br/>C:\\>`,

		solution : 
`node --version`
	},
	{	
		task : 
`15. Download the tool dependencies
<br/>C:\\>`,

		solution : 
`npm install`
	},
	{	
		task : 
`16. What file contains tools (dependencies)?`,

		solution : 
`package.json`
	},
	{	
		task : 
`17. How can I change disk drive in command prompt
<br/>C:\\>`,

		solution : 
`d:`
	},
	{	
		task : 
`18. Which tools (dependencies) are download?`,

		solution : 
`Bower - client-side code package manager
Http-Server - simple local static web server
Karma - unit test runner
Protractor - end-to-end (E2E) test runner`
	},
	{	
		task : 
`19. In which directory tools (dependencies) are settled?
<br/>C:\\>`,

		solution : 
`the node_modules directory`
	},
	{	
		task : 
`20. How stop server?
<br/>C:\\>`,

		solution : 
`ctrl-C`
	},
	{	
		task : 
`21. What is Karma?`,

		solution : 
`Unit test runner.`
	},
	{	
		task : 
`22. What is Protractor?`,

		solution : 
`end-to-end (E2E) test runner.`
	},
	{	
		task : 
`23. Run the unit tests for the application.`,

		solution : 
`npm test`	
	},
	{	
		task : 
`24. Running E2E Tests
<br/>C:\\>`,

		solution : 
`npm run update-webdriver
npm start
npm run protractor`
	},
	{	
		task : 
`25. Что такое npm?`,

		solution : 
`npm — это пакетный менеджер node.js. 
\n\nС его помощью можно управлять модулями и зависимостями.`
	},
	{	
		task : 
`26. Что такое Node.js?`,

		solution : 
`В двух словах — Node.js это интерпретатор языка JavaScript. 
\n\nСам по себе Node.js является C++ приложением, которое получает на входе JavaScript-код и выполняет его.`
	},
	{	
		task : 
`27. 
<br/>C:\\>`,

		solution : 
``
	}
];