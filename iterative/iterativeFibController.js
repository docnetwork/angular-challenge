angular.module('fibonnaciFunTimeApp').controller('iterativeFibController', ['$scope', 'fibService', function($scope, fibService){

  // value interpolated in html;
  $scope.currentNum = fibService.fibValue.iterative.current || 0;

  // keep track of index in fibonnaci sequence
  var fibonacciSequenceIndex = fibService.fibValue.iterative.fibonacciSequenceIndex || 0;

  /**
   * @param  {int} num  index of fibonnaci sequence;
   * @return value at index of fibonnaci sequence;
   */
  function fibFunc(num){
    switch(num){
      case 0:
        return 0;
        break;
      case 1: case 2:
        return 1;
        break;
      default:
        var prev1 = 0;
        var prev2 = 1;
        var someNum = 1;
        for(var i = num; i >= 2; i--) {
          someNum = prev1 + prev2;
          prev1 = prev2;
          prev2 = someNum;
        }
        return someNum;
        break;
    }
  }

  /**
  * Increments fibonacciSequenceIndex by 1 (if needed);
  * Updates fibService with new fibonacciSequenceIndex value;
  * @param {boolean} incrementFibCounter truthy if fibonacciSequenceIndex should be incremented or falsy if resetting to 0;
  * @return value of fibonacciSequenceIndex;
  */
  function setFibCounter(incrementFibCounter){
    incrementFibCounter ? fibonacciSequenceIndex++ : fibonacciSequenceIndex = 0;
    fibService.fibValue.iterative.fibonacciSequenceIndex = fibonacciSequenceIndex;
    return fibonacciSequenceIndex
  }

  /**
   * Runs fibFunc
   * @param  {boolean} getNextFib truthy if getting next number in fibonnaci sequence or falsy if resetting to 0;
   * @return Executes fibFunc() with appropriate fibonacciSequenceIndex value;
   */
  $scope.runFibFunc = function(getNextFib){
    return getNextFib ? $scope.currentNum = fibFunc(setFibCounter(getNextFib)) : $scope.currentNum = fibFunc(setFibCounter());
  }

  /**
   * Sets fibService to match $scope.currentNum;
   */
  $scope.$watch('currentNum', function(val){
    fibService.fibValue.iterative.current = val;
  })

}]);
