'use strict'
//http://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html
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
`9. create a new directory called loops, 
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
`10.  
<br/>C:\\>`,

		solution : 
``
	},
	{	
		task : 
`11.  
<br/>C:\\>`,

		solution : 
``
	},
	{	
		task : 
`12.  
<br/>C:\\>`,

		solution : 
``
	},
	{	
		task : 
`13. 
<br/>C:\\>`,

		solution : 
``
	},
	{	
		task : 
`14. 
<br/>C:\\>`,

		solution : 
``
	}
];