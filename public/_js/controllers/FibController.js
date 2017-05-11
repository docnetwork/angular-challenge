angular
  .module('main')
  .controller("FibCtrl", FibCtrl);

function FibCtrl() {
  var vm = this;
  vm.thisFib = 0;
  vm.lastFib = 0;
  vm.nFib = 0;



  // Custom Implementation
  vm.nickFib = function() {

    vm.nFib++;
    var n;

    if (vm.thisFib == 0) {
      n = 1;
      vm.lastFib = 0;
    } else {
      n = vm.lastFib + vm.thisFib;
      vm.lastFib = vm.thisFib;
    }

    // And so the wheel turns
    vm.thisFib = n;

  };



  // Iterative implemenation using a while loop
  vm.iterativeFib = function() {

    // Get NEXT fib, not current.
    vm.nFib++;

    var i = 0;
    var nMinus1 = 0;
    var nMinus2 = 0;
    var n = 0;

    while (i < vm.nFib + 1) {

      nMinus2 = nMinus1;
      nMinus1 = n;

      // If the loop only runs once, return 1
      if (i == 1) {
        n = 1;
      // Otherwise, do some math
      } else {
        n = nMinus1 + nMinus2;
      }

      i++;

    }

    vm.thisFib = n;
    vm.lastFib = nMinus1;

  };



  // Recursive implemenation
  vm.recursiveFib = function(fib) {

    // Get NEXT fib, not current.
    vm.nFib++;

    var calcFib = function(fib) {
      if (fib == 0) {
        return 0;
      } else if (fib == 1) {
        return 1;
      } else {
        return calcFib(fib - 2) + calcFib(fib - 1);
      }
    };

    // This conditional for lastFib is for compatibility with the other methods
    if (vm.nFib == 0) {
      vm.lastFib = 0;
    } else {
      vm.lastFib = calcFib(vm.nFib - 1);
    }

    vm.thisFib = calcFib(vm.nFib);

  };




  // Reset the state
  vm.resetFib = function() {
    vm.thisFib = 0;
    vm.lastFib = 0;
    vm.nFib = 0;
  };
};
