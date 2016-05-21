angular.module("app", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider
   
   .when('/home', {
      templateUrl: 'app/homeFeature/homeTemplate.html', 
      controller: 'homeController'
   })
   
//    when('/view2', {
//       templateUrl: 'view2.html', 
//       controller: 'View2Controller'
//    }).
   
   .otherwise({
      redirectTo: '/home'
   });
	
}]);