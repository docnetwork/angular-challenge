app.controller('appController', function (styles, fib, $scope) {
  let n = 0

  $scope.fibNum = 1
  $scope.handleNextFibClick = nextFib
  $scope.handleResetBtnClick = reset
  $scope.styles = styles

  function nextFib () {
    $scope.fibNum = fib.fastFib(n++)
  }

  function reset () {
    n = 0
    $scope.fibNum = 1
  }
})
