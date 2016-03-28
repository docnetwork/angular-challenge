var myApp = angular.module('root', []);

indexController = myApp.controller("index", ["$scope", function ($scope) {
    $scope.message = "Hello World!";
    $scope.getExcited = function() {
    	$scope.message += "!"
    }
}]);