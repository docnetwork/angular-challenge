angular.module('fibonnaciFunTimeApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $httpProvider){

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

});
