angular.module('fibonacciFunTimeApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/simple');

  $stateProvider
  	.state('simple', {
  		url: '/simple',
      controller: 'simpleFibController',
  		templateUrl: 'simple/simpleFib.html'
  	})
  	.state('iterative', {
  		url: '/iterative',
      controller: 'iterativeFibController',
  		templateUrl: 'iterative/iterativeFib.html'
  	})
  	.state('recursive', {
  		url: '/recursive',
      controller: 'recursiveFibController',
  		templateUrl: 'recursive/recursiveFib.html'
  	})

}]);
