angular.module('fibonnaciFunTimeApp').directive('fibNumberAndButtons', function(){

  return {
    restrict: "E",
    scope: {
      reset: '&',
      next: '&',
      num: '='
    },
    templateUrl: 'directives/fibNumberAndButtons.html',
    link: function(scope){
      // scope.$watch('num', function(newVal, oldVal){
      //   console.log("newVal", newVal)
      // })
    }
  }

});
