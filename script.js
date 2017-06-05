var app = angular.module('fib', []);

app.controller('nextFibCtrl', function($scope,){

         $scope.results = [0,1];

     $scope.nextNum = function(){

         $scope.currentInt = $scope.results.length -1;

         $scope.nextInt = $scope.results[$scope.currentInt] + $scope.results[$scope.currentInt -1];

         $scope.results.push($scope.nextInt);

     }

          $scope.clear = function(){

          $scope.results = [0,1];

      }

    });
