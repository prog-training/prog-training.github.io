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

The controller is simply a constructor function that takes a $scope parameter

Controller plays a crucial role. 
The PhoneListController controller attaches the phone data to the $scope that was injected into our controller function. This scope is a prototypal descendant of the root scope that was created when the application was defined. This controller scope is available to all bindings located within the <body ng-controller="PhoneListController"> tag.`
},
{	
task : 
`9. Specify an AngularJS Module in index.html. 
<br/>'phonecatApp' is the name of our module`,
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
`The concept of a scope in AngularJS is crucial.
 A scope can be seen as the glue which allows the template, model, and controller to work together.

 AngularJS uses scopes, along with the information contained in the template, data model, and controller, to keep models and views SEPARATE, but in SYNC. 

 Any changes made to the model are reflected in the view; any changes that occur in the view are reflected in the model.`
},
{	
task : 
`13. Add binding with length of phones to index.html (paragraph). `,
solution : 
`&ltp&gt Total number of phones: {{phones.length}} &lt/p&gt`
},
{	
task : 
`14. Create a new model property in the controller and bind to it from the template.`,
solution : 
`app.js:

  $scope.name = 'world';

index.html: 

  <p>Hello, {{name}}!</p>`
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
</br>
</br>&ltul class="phones"&gt
</br>&nbsp  &ltli ng-repeat="phone in $ctrl.phones"&gt
</br>&nbsp&nbsp&nbsp    &ltspan> {{phone.name}} &lt/span&gt
</br>&nbsp&nbsp&nbsp    &ltp> {{phone.snippet}} &lt/p&gt
</br>&nbsp  &lt/li&gt
</br>&lt/ul&gt`,
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
</br>
</br>Search: &ltinput ng-model="$ctrl.query" /&gt
</br>
</br>&ltul class="phones"&gt
</br>&nbsp  &ltli ng-repeat="phone in $ctrl.phones | filter:$ctrl.query"&gt
</br>&nbsp&nbsp&nbsp    &ltspan>{{phone.name}} &lt/span&gt
</br>&nbsp&nbsp&nbsp    &ltp>{{phone.snippet}} &lt/p&gt
</br>&nbsp  &lt/li&gt
</br>&lt/ul&gt`,
solution : 
`  Search:
  <input ng-model="$ctrl.query">

  <select ng-model="$ctrl.orderProp">
    <option value="name">Alphabetical</option>
    <option value="age">Newest</option>
  </select>

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

You can create your own services. 
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
`30. Add thumbnail images for the phones in the phone list, and links that.

</br>&ltul class="phones"&gt
</br>&nbsp  &ltli ng-repeat="phone in $ctrl.phones | filter:$ctrl.query"&gt
</br>&nbsp&nbsp&nbsp    &ltspan>{{phone.name}} &lt/span&gt
</br>&nbsp&nbsp&nbsp    &ltp>{{phone.snippet}} &lt/p&gt
</br>&nbsp  &lt/li&gt
</br>&lt/ul&gt`,
solution : 
`<ul class="phones">
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp" class="thumbnail">
    <a href="#/phones/{{phone.id}}" class="thumb">
      <img ng-src="{{phone.imageUrl}}" alt="{{phone.name}}" />
    </a>
    <a href="#/phones/{{phone.id}}">{{phone.name}}</a>
    <p>{{phone.snippet}}</p>
  </li>
</ul>

The directive ngSrc prevents the browser from treating the AngularJS {{ expression }} markup literally, 
and initiating a request to an invalid URL `
},
{ 
task : 
`31. Add  ngView directive to index.html.`,
solution : 
`<div ng-view></div>

 The role of the ngView directive is to include the view template for the current route into the layout template.`
},
{ 
task : 
`32. Which links $route service needed?`,
solution : 
`&ltscript src="bower_components/angular-route/angular-route.js"&gt &lt/script&gt

&ltscript src="app.config.js"&gt &lt/script&gt

&ltscript src="phone-detail/phone-detail.module.js"&gt &lt/script&gt

&ltscript src="phone-detail/phone-detail.component.js"&gt &lt/script&gt

angular-route.js: Defines the AngularJS ngRoute module, which provides us with routing.
app.config.js: Configures the providers available to our main module (see below).
phone-detail.module.js: Defines a new module containing a phoneDetail component.
phone-detail.component.js: Defines a dummy phoneDetail component (see below).`
},
{ 
task : 
`33.  Add ngRoute as a dependency of our phonecatApp module - file app.module.js`,
solution : 
`'use strict';

// Define the 'phonecatApp' module
angular.module('phonecatApp', [
  'ngRoute',
  'phoneDetail',
  'phoneList'
]);`
},
{ 
task : 
`34. Where is the $route service (using its provider), which file?`,
solution : 
`app/app.config.js

 In order to be able to quickly locate the configuration code, we put it into a separate file and used the .config suffix.`
},
{ 
task : 
`35.  Configure the $route service (using its provider) for our application.`,
solution : 
`angular.
  module('phonecatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);

Using the .config() method, we request the necessary providers (for example the $routeProvider) to be injected into our configuration function and then use their methods to specify the behavior of the corresponding services. Here, we use the $routeProvider.when() and $routeProvider.otherwise() methods to define our application routes.

We also used $locationProvider.hashPrefix() to set the hash-prefix to !. This prefix will appear in the links to our client-side routes, right after the hash (#) symbol and before the actual path (e.g. index.html#!/some/path).
Setting a prefix is not necessary, but it is considered a good practice (for reasons that are outside the scope of this tutorial). ! is the most commonly used prefix.`
},
{ 
task : 
`36.  Create a phoneDetail module, which we added as a dependency of the phonecatApp module.`,
solution : 
`angular.module('phoneDetail', [
  'ngRoute'
]);`
},
{ 
task : 
`37. Create a phoneDetail component to handle the phone details view (show id).`,
solution : 
`'use strict';

// Register 'phoneDetail' component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    controller: ['$routeParams',
      function PhoneDetailController($routeParams) {
        this.phoneId = $routeParams.phoneId;
      }
    ]
  });`
},
{ 
task : 
`38. Expand the phoneDetail component's controller by using the $http service to fetch the appropriate JSON files
<br/>
<br/>angular.
<br/>&nbsp  module('phoneDetail').
<br/>&nbsp  component('phoneDetail', {
<br/>&nbsp&nbsp    template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
<br/>&nbsp&nbsp    controller: ['$routeParams',
<br/>&nbsp&nbsp&nbsp      function PhoneDetailController($routeParams) {
<br/>&nbsp&nbsp&nbsp&nbsp       this.phoneId = $routeParams.phoneId;
<br/>&nbsp&nbsp&nbsp      }
<br/>&nbsp&nbsp   ]
<br/>&nbsp  });`,
solution : 
`angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
        });
      }
    ]
  });`
},
{ 
task : 
`39. Where is the checkmark Filter?`,
solution : 
`app/core/checkmark/checkmark.filter.js

Since this filter is generic (i.e. it is not specific to any view or component),
we are going to register it in a core module, which contains "application-wide" features.`
},
{ 
task : 
`40. Add checkmark Filter to
<br/>app/core/core.module.js
<br/>
<br/>and to
<br/>app/core/checkmark/checkmark.filter.js
<br/>
<br/>then register the core module as a dependency of our main phonecatApp module.
<br/>app/app.module.js:
<br/>
<br/>new files (core.module.js, checkmark.filter.js) are needed to include in our layout template
<br/>app/index.html:`,
solution : 
`app/core/core.module.js:

angular.module('core', []);


app/core/checkmark/checkmark.filter.js:

angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });


app/app.module.js:

angular.module('phonecatApp', [
  ...
  'core',
  ...
]);


app/index.html:

&ltscript src="core/core.module.js"&gt &ltscript&gt
&ltscript src="core/checkmark/checkmark.filter.js"&gt &lt/script&gt`
},
{ 
task : 
`41. Employ the filter in the phone details template:
<br/>
<br/>app/phone-detail/phone-detail.template.html:`,
solution : 
`<dl&gt
  <dt&gt Infrared </dt&gt
  <dd&gt {{$ctrl.phone.connectivity.infrared | checkmark}} </dd&gt
  <dt&gt PS /dt&gt
  <dd&gt {{$ctrl.phone.connectivity.gps | checkmark}} </dd&gt
</dl&gt`
},
{ 
task : 
`42. What is the syntax for using filters in AngularJS templates?`,
solution : 
`{{expression | filter}}`
},
{ 
task : 
`43. Get string in uppercase
<br/>
<br/>{{'lower cap string'}}`,
solution : 
`{{'lower cap string' | uppercase}}`
},
{ 
task : 
`44. Get object in json.
<br/>{{ {foo: 'bar', baz: 42} }}`,
solution : 
`{{foo: 'bar', baz: 42} | json}}`
},
{ 
task : 
`45. Get date in date format
<br/>{{1459461289000}}`,
solution : 
`{{1459461289000 | date}}`
},
{ 
task : 
`46. Get date in needed format
<br/>{{1459461289000}}`,
solution : 
`{{1459461289000 | date:'MM/dd/yyyy @ h:mma'}}`
},
{ 
task : 
`47.  Create a model with an input element, and combine it with a filtered binding in index.html`,
solution : 
`&ltinput ng-model="userInput" /&gt Uppercased: {{userInput | uppercase}}`
},
{ 
task : 
`48.  Create an event handler, that will change the value of mainImageUrl.
<br/>
<br/>app/phone-detail/phone-detail.component.js:
<br/>app/phone-detail/phone-detail.template.html:`,
solution : 
`app/phone-detail/phone-detail.component.js:
...
controller: ['$http', '$routeParams',
  function PhoneDetailController($http, $routeParams) {
    var self = this;

    self.setImage = function setImage(imageUrl) {
      self.mainImageUrl = imageUrl;
    };

    $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
      self.phone = response.data;
      self.setImage(self.phone.images[0]);
    });
  }
]
...

In the phoneDetail component's controller, we created the mainImageUrl model property and set its default value to the first phone image URL.

We also created a setImage() method (to be used as event handler), that will change the value of mainImageUrl.


app/phone-detail/phone-detail.template.html:

&ltimg ng-src="{{$ctrl.mainImageUrl}}" class="phone" /&gt
...
&ltul class="phone-thumbs"&gt
  &ltli ng-repeat="img in $ctrl.phone.images"&gt
    &ltimg ng-src="{{img}}" ng-click="$ctrl.setImage(img)" /&gt
  &lt/li&gt
&lt/ul&gt
...

We bound the ngSrc directive of the large image to the $ctrl.mainImageUrl property.

We also registered an ngClick handler with thumbnail images. 
When a user clicks on one of the thumbnail images, the handler will use the $ctrl.setImage() method callback 
to change the value of the $ctrl.mainImageUrl property to the URL of the clicked thumbnail image.`
},
{ 
task : 
`49. Add handler for double-click on a thumbnail, result - alert pops-up`,
solution : 
`Let's add a new controller method to the phoneDetail component's controller:

self.onDblclick = function onDblclick(imageUrl) {
  alert('You double-clicked image: ' + imageUrl);
};


and add the following to the <img> element in phone-detail.template.html:

&ltimg ... ng-dblclick="$ctrl.onDblclick(img)" /&gt

There are built-in directives for all native events, such as dblclick, focus/blur, mouse and key events, etc.`
},
{ 
task : 
`50. Which module provides RESTful functionality?`,
solution : 
`RESTful functionality is provided by AngularJS in the ngResource module.`
},
{ 
task : 
`51. Explicitly declare dependency on ngResource.`,
solution : 
`We create our own service to provide access to the phone data on the server. 
We will put the service in its own module, under core, so we can explicitly declare its dependency on ngResource:

app/core/phone/phone.module.js:

angular.module('core.phone', ['ngResource']);


app/core/phone/phone.service.js:

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);

We used the module API to register a custom service using a factory function. 
We passed in the name of the service — 'Phone' — and the factory function. 
The factory function is similar to a controller's constructor in that both can declare dependencies to be injected via function arguments. 
 Phone service declares a dependency on the $resource service, provided by the ngResource module.

The $resource service makes it easy to create a RESTful client with just a few lines of code. 
This client can then be used in our application, instead of the lower-level $http service.


app/core/core.module.js:

angular.module('core', ['core.phone']);
We need to add the core.phone module as a dependency of the core module.`
},
{ 
task : 
`52. Load the file, which contains the ngResource module`,
solution : 
`&ltscript src="bower_components/angular-resource/angular-resource.js"&gt &lt/script&gt`
},
{ 
task : 
`53. Define a custom service that represents a RESTful client. 
<br/>Using this client we can make requests for data to the server in an easier way,
<br/>without having to deal with the lower-level $http API, HTTP methods and URLs.

Create new Phone service`,
solution : 
`We can now simplify our component controllers (PhoneListController and PhoneDetailController) by 
factoring out the lower-level $http service, replacing it with the new Phone service. 

app/phone-list/phone-list.module.js:

angular.module('phoneList', ['core.phone']);


app/phone-list/phone-list.component.js:

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });


app/phone-detail/phone-detail.module.js:

angular.module('phoneDetail', [
  'ngRoute',
  'core.phone'
]);


app/phone-detail/phone-detail.component.js:

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });

Notice how in PhoneListController we replaced:

$http.get('phones/phones.json').then(function(response) {
  self.phones = response.data;
});
with just:

this.phones = Phone.query();

This is a simple and declarative statement that we want to query for all phones.

An important thing to notice in the code above is that we don't pass any callback functions, when invoking methods of our Phone service. 
Although it looks as if the results were returned synchronously, that is not the case at all. 
What is returned synchronously is a "future" — an object, which will be filled with data, when the XHR response is received. 
Because of the data-binding in AngularJS, we can use this future and bind it to our template.
 Then, when the data arrives, the view will be updated automatically.

Sometimes, relying on the future object and data-binding alone is not sufficient to do everything we require, 
so in these cases, we can add a callback to process the server response. 
The phoneDetail component's controller illustrates this by setting the mainImageUrl in a callback.`
},
{ 
task : 
`54. `,
solution : 
``
}

];