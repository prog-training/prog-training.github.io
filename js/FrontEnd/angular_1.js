'use strict'
//https://habrahabr.ru/post/273545/
//https://metanit.com/web/angular/1.1.php
var angular_1 = 
[
{	

task : 
`1. Write AngularJS directive, named ngApp`,
solution : 
`<!doctype html>
<html lang="en" ng-app>


This directive is used to flag the HTML element that AngularJS should consider to be the root element of our application. 

Only a portion of application can be treated as the AngularJS application.`
},
{	
task : 
`2.angular.js script tag: `,
solution : 
`&ltscript src="bower_components/angular/angular.js"&gt &lt/script &gt

This code downloads the angular.js script which registers a callback that will be executed by the browser when the containing HTML page is fully downloaded. When the callback is executed, AngularJS looks for the ngApp directive. If AngularJS finds the directive, it will bootstrap the application with the root of the application DOM being the element on which the ngApp directive was defined.`
},
{	
task : 
`3. What is binding?`,
solution : 
`{{ 'nothing yet' + '!' }}

The binding tells AngularJS that it should evaluate an expression and insert the result into the DOM in place of the binding.`
},
{	
task : 
`4. What happen during the bootstrap phase?`,
solution : 
`1) The injector that will be used for dependency injection is created.

2) The injector will then create the root scope that will become the context for the model of our application.

3) AngularJS will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.

Once an application is bootstrapped, it will then wait for incoming browser events (such as mouse clicks, key presses or incoming HTTP responses) that might change the model. Once such an event occurs, AngularJS detects if it caused any model changes and if changes are found, AngularJS will reflect them in the view by updating all of the affected bindings.`
},
{	
task : 
`5. What is DOM?`,
solution : 
`Document Object Model

DOM – это представление документа в виде дерева объектов, доступное для изменения через JavaScript.`
},
{	
task : 
`6. Write phone list with the ngRepeat directive and two AngularJS expressions`,
solution : 
`<ul>
	<li ng-repeat="phone in phones">
	  <span>{{phone.name}}</span>
	  <p>{{phone.snippet}}</p>
	</li>
</ul>`
},
{	
task : 
`7. Write directive, called ngController, which attaches a PhoneListController controller to the <body> tag`,
solution : 
`&ltbody ng-controller="PhoneListController"&gt`
},
{	
task : 
`8. What is comtroller?`,
solution : 
`Controller is in charge of the DOM sub-tree under (and including) the <body> element.

The controller is simply a constructor function that takes a $scope parameter:

Controller plays a crucial role. 
The PhoneListController controller attaches the phone data to the $scope that was injected into our controller function. This scope is a prototypal descendant of the root scope that was created when the application was defined. This controller scope is available to all bindings located within the <body ng-controller="PhoneListController"> tag.`
},
{	
task : 
`9. Specify an AngularJS Module. 'phonecatApp' is the name of our module`,
solution : 
`<html ng-app="phonecatApp">`
},
{	
task : 
`10. Define the "phonecatApp" module in app.js`,
solution : 
`var phonecatApp = angular.module('phonecatApp', []);`
},
{	
task : 
`11. Define the 'PhoneListController' controller on the 'phonecatApp' module`,
solution : 
`phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

Here we declared a controller called PhoneListController and registered it in an AngularJS module, phonecatApp. Notice that our ngApp directive (on the <html> tag) now specifies the phonecatApp module name as the module to load when bootstrapping the application.`
},
{	
task : 
`12. What is Scope?`,
solution : 
`The concept of a scope in AngularJS is crucial. A scope can be seen as the glue which allows the template, model, and controller to work together. AngularJS uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync. Any changes made to the model are reflected in the view; any changes that occur in the view are reflected in the model.`
},
{	
task : 
`13. Add binding with length of phones to index.html (paragraph). `,
solution : 
`&ltp&gt Total number of phones: {{phones.length}} &gt/p&gt`
},
{	
task : 
`14. Create a new model property in the controller and bind to it from the template.`,
solution : 
`app.js: $scope.name = 'world';

index.html: <p>Hello, {{name}}!</p>`
},
{	
task : 
`15. Create a repeater in index.html that constructs a simple table`,
solution : 
`<table>
  <tr><th>Row number</th></tr>
  <tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i}}</td></tr>
</table>`
},
{	
task : 
`16. Try and make an 8x8 table in index.html using an additional ng-repeat.`,
solution : 
`$scope.arr = [0,1,2,3,4,5,6,7];

<table>
  <tr><th>Row number 2</th></tr>
  <tr ng-repeat="i in arr"><td></td>
    <td ng-repeat="j in arr">{{i}}{{j}}_</td>
  </tr>
</table>`
},
{	
task : 
`17. `,
solution : 
``
},
{	
task : 
`18. `,
solution : 
``
},
{	
task : 
`19. `,
solution : 
``
},
{	
task : 
`16. `,
solution : 
``
},
{	
task : 
`20. `,
solution : 
``
},
{	
task : 
`21. `,
solution : 
``
}

];