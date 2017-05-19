angular.module('fibonacciFunTimeApp').controller('recursiveFibController', ['$scope', 'fibService', function($scope, fibService){

  // value interpolated in html;
  $scope.currentNum = fibService.fibValue.recursive.current || 0;

  // keep track of index in fibonacci sequence
  var fibonacciSequenceIndex = fibService.fibValue.recursive.fibonacciSequenceIndex || 0;

  /**
   * @param  {int} num  index of fibonacci sequence;
   * @return value at index of fibonacci sequence;
   */
  function fibFunc(num){
    if(num === 0){
      return 0;
    } else if(num === 1 || num === 2){
      return 1;
    } else {
      return fibFunc(num - 1) + fibFunc(num - 2);
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
    fibService.fibValue.recursive.fibonacciSequenceIndex = fibonacciSequenceIndex;
    return fibonacciSequenceIndex
  }

  /**
   * Runs fibFunc
   * @param  {boolean} getNextFib truthy if getting next number in fibonacci sequence or falsy if resetting to 0;
   * @return Executes fibFunc() with appropriate fibonacciSequenceIndex value;
   */
  $scope.runFibFunc = function(getNextFib){
    return getNextFib ? $scope.currentNum = fibFunc(setFibCounter(getNextFib)) : $scope.currentNum = fibFunc(setFibCounter());
  }

  /**
   * Sets fibService to match $scope.currentNum;
   */
  $scope.$watch('currentNum', function(val){
    fibService.fibValue.recursive.current = val;
  })

}]);
