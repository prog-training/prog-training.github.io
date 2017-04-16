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
`7. Write directive, called ngController, which attaches a PhoneListController controller to the &ltbody&gt tag`,
solution : 
`&ltbody ng-controller="PhoneListController"&gt`
},
{	
task : 
`8. What is controller?`,
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
`17. What is component?`,
solution : 
`AngularJS will create a so called isolate scope for each instance of our component.

So, components are reusable and isolated entities.`
},
{	
task : 
`18. Create a component Hello world!`,
solution : 
`angular.
  module('myApp').
  component('greetUser', {
    template: 'Hello, {{$ctrl.user}}!',
    controller: function GreetUserController() {
      this.user = 'world';
    }
  });

  It is considered a good practice to avoid using the scope directly.
  From the template, we can refer to our controller instance using an alias. 
  This way, the context of evaluation for our expressions is even more clear. 
  By default, components use $ctrl as the controller alias, but we can override it, should the need arise.`
},
{	
task : 
`19. What are needed to create a component?`,
solution : 
`To create a component, we use the .component() method of an AngularJS module. 

We must provide the name of the component 
and 
the Component Definition Object (CDO for short).

Remember that (since components are also directives) the name of the component is in camelCase (e.g. myAwesomeComponent), but we will use kebab-case (e.g. my-awesome-component) when referring to it in our HTML.

In its simplest form, the CDO will just contain a template and a controller. 
(We can actually omit the controller and AngularJS will create a dummy controller for us. 
This is useful for simple "presentational" components, that don't attach any behavior to the template.)

Definition of a someComponent component would be in a file named some-component.component.js.`
},
{	
task : 
`20. Use a custom component phoneList in index.html to render a list of phones`,
solution : 
`&ltphone-list&gt&lt/phone-list&gt`
},
{ 
task : 
`21.  Register 'phoneList' component, along with its associated controller and template`,
solution : 
`'use strict';
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        ... $ctrl.phones ...
    controller: function PhoneListController() {
      this.phones = [
        ...
      ];
    }
  });`
},
{ 
task : 
`22. Now add binding (Total number of phone) to the phoneList component's template`,
solution : 
`'<p>Total number of phones: {{$ctrl.phones.length}}</p>' `
},
{ 
task : 
`23. Directory and File Organization`,
solution : 
`Group our files into directories by feature.

Each feature/section should declare its own module and all related entities should register themselves on that module.`
},
{ 
task : 
`24. Final Directory/File Layout`,
solution : 
`app/
  phone-list/
    phone-list.component.js
    phone-list.component.spec.js
    phone-list.module.js
    phone-list.template.html
  app.css
  app.module.js
  index.html`
},
{ 
task : 
`25. Add filter for phones.

<ul class="phones">
  <li ng-repeat="phone in $ctrl.phones">
    <span>{{phone.name}}</span>
    <p>{{phone.snippet}}</p>
  </li>
</ul>`,
solution : 
`Search: <input ng-model="$ctrl.query" />

<ul class="phones">
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query">
    <span>{{phone.name}}</span>
    <p>{{phone.snippet}}</p>
  </li>
</ul>

We added a standard HTML <input> tag and used AngularJS's filter function to process the input for the ngRepeat directive.

The ngModel directive, this lets a user enter search criteria and immediately see the effects of their search on the phone list. `
},
{ 
task : 
`26. Add select to control order of phone list.

Search: <input ng-model="$ctrl.query" />

<ul class="phones">
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query">
    <span>{{phone.name}}</span>
    <p>{{phone.snippet}}</p>
  </li>
</ul>`,
solution : 
`  Search:
  <input ng-model="$ctrl.query">

<p>
  Sort by:
  <select ng-model="$ctrl.orderProp">
    <option value="name">Alphabetical</option>
    <option value="age">Newest</option>
  </select>
</p>

<ul class="phones">
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp">
    <span>{{phone.name}}</span>
    <p>{{phone.snippet}}</p>
  </li>
</ul>

Controller:
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];

      this.orderProp = 'age';
    }
  });

  We added a line to the controller that sets the default value of orderProp to age. 
  If we had not set a default value here, the orderBy filter would remain uninitialized until the user picked an option from the drop-down menu.`
},
{ 
task : 
`27. Use AngularJS's $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file.`,
solution : 
`Services are managed by AngularJS's DI subsystem. 

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
      });
    }
  });

  $http makes an HTTP GET request to our web server, asking for phones.json (the URL is relative to our index.html file).

  The $http service returns a promise object, which has a then() method. 
  We call this method to handle the asynchronous response and assign the phone data to the controller, as a property called phones. 
  Notice that AngularJS detected the JSON response and parsed it for us into the data property of the response object passed to our callback!

  Since we are making the assignment of the phones property in a callback function, where the this value is not defined, we also introduce a local variable called self that points back to the controller instance.`
},
{ 
task : 
`28. What do you need to use a service?`,
solution : 
`To use a service in AngularJS, you simply declare the names of the dependencies you need as arguments to the controller's constructor function, as follows:

function PhoneListController($http) {...}

AngularJS's dependency injector provides services to your controller, when the controller is being constructed.

You can create your own services, and in fact we will do exactly that a few steps down the road. 
As a naming convention, AngularJS's built-in services, Scope methods and a few other AngularJS APIs have a $ prefix in front of the name.
To prevent collisions it's best to avoid naming your services and models anything that begins with a $.`
},
{ 
task : 
`29. In the PhoneListController controller, pre-process the HTTP response by limiting the number of phones to the first 5 in the list.`,
solution : 
`self.phones = response.data.slice(0, 5);`
},
{ 
task : 
`30. `,
solution : 
``
},
{ 
task : 
`31. `,
solution : 
``
},
{ 
task : 
`32. `,
solution : 
``
}

];