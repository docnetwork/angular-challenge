angular.module('fibonnaciFunTimeApp').directive('fibNumberAndButtons', function(){

  return {
    restrict: "E",
    scope: {
      reset: '&',
      next: '&',
      num: '='
    },
    templateUrl: 'directives/fibNumberAndButtons.html',
  }

});
