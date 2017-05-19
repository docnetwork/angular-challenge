angular.module('fibonacciFunTimeApp').controller('simpleFibController', ['$scope', 'fibService', function($scope, fibService){

  // value interpolated in html;
  $scope.currentNum = fibService.fibValue.simple.current || 0;

  // one of the two numbers to add to get next fibonacci sequence value;
  var previousNum1 = fibService.fibValue.simple.prev1 || 0;

  // one of the two numbers to add to get next fibonacci sequence value;
  var previousNum2 = fibService.fibValue.simple.prev2 || 1;

  /**
   * Adds two params to get next value in fibonacci sequence;
   * @param  {int} num1 one of the two numbers to add to get next fibonacci sequence value;
   * @param  {int} num2 one of the two numbers to add to get next fibonacci sequence value;
   * @return Sets new value of $scope.currentNum and updates fibService values;
   */
  function fibFunc(num1, num2){
    if($scope.currentNum < 1){
      $scope.currentNum = num1 + num2;
    } else {
      previousNum1 = num2;
      previousNum2 = num1 + num2;
      $scope.currentNum = previousNum2;
    }
    setFibServiceValues($scope.currentNum, num2, num1 + num2);
  }

  /**
   * Sets fibService values
   * @param {int} current $scope.currentNum;
   * @param {int} prev1   one of the two numbers to add to get next fibonacci sequence value;
   * @param {int} prev2   one of the two numbers to add to get next fibonacci sequence value;
   */
  function setFibServiceValues(current, prev1, prev2){
    fibService.fibValue.simple.prev1 = prev1;
    fibService.fibValue.simple.prev2 = prev2
    fibService.fibValue.simple.current = current;
  }

  /**
   * Resets $scope.currentNum and previousNum variables to values for original/default case;
   */
  $scope.simpleResetFib = function(){
    previousNum1 = 0;
    previousNum2 = 1;
    $scope.currentNum = 0;
    setFibServiceValues($scope.currentNum, previousNum1, previousNum2);
  }

  /**
   * Executes fibFunc passing the two variables representing the last two numbers in the fibonacci sequence;
   */
  $scope.simpleNextFib = function(){
    return fibFunc(previousNum1,previousNum2);
  }

}]);
