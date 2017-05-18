angular.module('fib',[])


.controller('fibController', $scope => {
  $scope.fib = 0;
  $scope.previous = 0;
  $scope.current = 0;

  //Increase count sequence
  $scope.increase = () => {
    let temp;

    $scope.fib === 0 ? temp = 1 : (
      temp = $scope.previous + $scope.fib,
      $scope.previous = $scope.fib
    )

     $scope.fib = temp;
  }

  $scope.recursive = () => {
    $scope.current++;

    const fibonacci = num => {
      if (num === 0) {
        return 0;
      } else if (num === 1) {
        return 1;
      } else {
        return fibonacci(num - 2) + fibonacci(num - 1);
      }
    };

    $scope.fib = fibonacci($scope.current);
  }

  $scope.iterative = () => {
    //Make it work separately
    $scope.current++;

    let i = 0;
    let prevNum1 = 0;
    let prevNum2 = 0;
    let temp = 0;

    while (i < $scope.current + 1) {
      prevNum2 = prevNum1;
      prevNum1 = temp;

      i === 1 ? temp = 1 : temp = prevNum1 + prevNum2;
      i++;
    }

    $scope.fib = temp;
    $scope.previous = prevNum1;
  }

  //Reset count back to 0
  $scope.clear = () => {
    $scope.fib = 0;
    $scope.previous = 0;
  }
});
