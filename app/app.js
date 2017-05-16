angular.module('fib',[])


.controller('fibController', $scope => {
  $scope.fib = 0;
  $scope.previous = 0;

  //Increase count sequence
  $scope.increase = () => {
    let temp;

    $scope.fib === 0 ? temp = 1 : (
      temp = $scope.previous + $scope.fib,
      $scope.previous = $scope.fib
    )

     $scope.fib = temp;
  }

  //Reset count back to 0
  $scope.clear = () => {
    $scope.fib = 0;
    $scope.previous = 0;
  }
});
