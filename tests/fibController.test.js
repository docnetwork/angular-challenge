describe('The Fibonacci Controller', function() {


  var $controller;

  beforeEach(module('main'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));



  // Ensure the controller exists and is defined
  it('is defined', function() {
    var FibController = $controller('FibCtrl')
    expect(FibController).toBeDefined();
  });



  // Ensure initial state looks good
  describe('inital state', function() {

    var $scope, $controller;

    beforeEach(inject(function($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_;
    }));

    it('has thisFib set to 0', function() {
      var vm = $controller('FibCtrl');
      expect(vm.thisFib).toBe(0);
    });

    it('has lastFib set to 0', function() {
      var vm = $controller('FibCtrl');
      expect(vm.lastFib).toBe(0);
    });

    it('has nFib set to 0', function() {
      var vm = $controller('FibCtrl');
      expect(vm.nFib).toBe(0);
    });

  });



  // Describe My Implementation
  describe('nickFib function', function() {

    var $scope, $controller;

    beforeEach(inject(function($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_;
    }));

    it('is defined', function() {
      var vm = $controller('FibCtrl');
      expect(vm.nickFib).toBeDefined()
    });

    it('Returns 1 as the first increment', function() {
      var vm = $controller('FibCtrl');
      vm.nickFib();
      expect(vm.thisFib).toBe(1);
    });

    it('Returns 1 as the second increment', function() {
      var vm = $controller('FibCtrl');
      vm.nickFib();
      expect(vm.thisFib).toBe(1);
    });

    it('Increments both thisFib and lastFib properly', function() {
      var vm = $controller('FibCtrl');
      vm.nickFib();
      vm.nickFib();
      vm.nickFib();
      vm.nickFib();
      expect(vm.thisFib).toBe(3);
      expect(vm.lastFib).toBe(2);
    });
  });



  // Describe Iterative Implementation
  describe('iterativeFib function', function() {

    var $scope, $controller;

    beforeEach(inject(function($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_;
    }));

    it('is defined', function() {
      var vm = $controller('FibCtrl');
      expect(vm.iterativeFib).toBeDefined()
    });


    it('Returns 1 for first increment', function() {
      var vm = $controller('FibCtrl');
      vm.nFib = 0;
      vm.iterativeFib();
      expect(vm.thisFib).toBe(1);
    });

    it('Returns 1 for second increment', function() {
      var vm = $controller('FibCtrl');
      vm.nFib = 1;
      vm.iterativeFib();
      expect(vm.thisFib).toBe(1);
    });

    it('Increments both thisFib and lastFib properly', function() {
      var vm = $controller('FibCtrl');
      vm.nFib = 4;
      vm.iterativeFib();
      expect(vm.thisFib).toBe(5);
      expect(vm.lastFib).toBe(3);
    });
  });



  // Describe Recursive Implementation
  describe('recursiveFib function', function() {

    var $scope, $controller;

    beforeEach(inject(function($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_;
    }));

    it('is defined', function() {
      var vm = $controller('FibCtrl');
      expect(vm.recursiveFib).toBeDefined()
    });

    it('Returns 1 for first increment', function() {
      var vm = $controller('FibCtrl');
      vm.nFib = 0;
      vm.recursiveFib();
      expect(vm.thisFib).toBe(1);
    });

    it('Returns 1 for second increment', function() {
      var vm = $controller('FibCtrl');
      vm.nFib = 1;
      vm.recursiveFib();
      expect(vm.thisFib).toBe(1);
    });

    it('Increments both thisFib and lastFib properly', function() {
      var vm = $controller('FibCtrl');
      vm.nFib = 4;
      vm.recursiveFib();
      expect(vm.thisFib).toBe(5);
      expect(vm.lastFib).toBe(3);
    });
  });



  // Describe Reset Implementation
  describe('reset function', function () {
    var $scope, $controller;

    beforeEach(inject(function($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_;
    }));

    it('resets 5 iterations of nickFib as expected', function() {
      var vm = $controller('FibCtrl');

      vm.nickFib();
      vm.nickFib();
      vm.nickFib();
      vm.nickFib();
      vm.nickFib();

      expect(vm.thisFib).toBe(5);
      expect(vm.lastFib).toBe(3);
      expect(vm.nFib).toBe(5);

      vm.resetFib();
      expect(vm.thisFib).toBe(0);
      expect(vm.lastFib).toBe(0);
      expect(vm.nFib).toBe(0);
    });

    it('resets 5 iterations of iterativeFib as expected', function() {

      var vm = $controller('FibCtrl');

      vm.nFib = 4;
      vm.iterativeFib();

      expect(vm.thisFib).toBe(5);
      expect(vm.lastFib).toBe(3);
      expect(vm.nFib).toBe(5);

      vm.resetFib();
      expect(vm.thisFib).toBe(0);
      expect(vm.lastFib).toBe(0);
      expect(vm.nFib).toBe(0);
    });

    it('resets 5 iterations of recursiveFib as expected', function() {

      var vm = $controller('FibCtrl');

      vm.nFib = 4;
      vm.recursiveFib();

      expect(vm.thisFib).toBe(5);
      expect(vm.lastFib).toBe(3);
      expect(vm.nFib).toBe(5);

      vm.resetFib();
      expect(vm.thisFib).toBe(0);
      expect(vm.lastFib).toBe(0);
      expect(vm.nFib).toBe(0);
    });

  });



  // Descrive Cross-compatability
  describe('Cross-compatability', function() {

    var $scope, $controller;

    beforeEach(inject(function($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_;
    }));

    it('works: nickFib > iterativeFib > recursiveFib', function() {
      var vm = $controller('FibCtrl');

      vm.nickFib();
      vm.nickFib();
      expect(vm.thisFib).toBe(1);
      expect(vm.lastFib).toBe(1);
      expect(vm.nFib).toBe(2);

      vm.iterativeFib()
      expect(vm.thisFib).toBe(2);
      expect(vm.lastFib).toBe(1);
      expect(vm.nFib).toBe(3);

      vm.recursiveFib()
      expect(vm.thisFib).toBe(3);
      expect(vm.lastFib).toBe(2);
      expect(vm.nFib).toBe(4);
    });

    it('works: iterativeFib > recursiveFib > nickFib', function() {
      var vm = $controller('FibCtrl');

      vm.iterativeFib();
      vm.iterativeFib();
      expect(vm.thisFib).toBe(1);
      expect(vm.lastFib).toBe(1);
      expect(vm.nFib).toBe(2);

      vm.recursiveFib()
      expect(vm.thisFib).toBe(2);
      expect(vm.lastFib).toBe(1);
      expect(vm.nFib).toBe(3);

      vm.nickFib()
      expect(vm.thisFib).toBe(3);
      expect(vm.lastFib).toBe(2);
      expect(vm.nFib).toBe(4);
    });

    it('works: recursiveFib > nickFib > iterativeFib', function() {
      var vm = $controller('FibCtrl');

      vm.recursiveFib();
      vm.recursiveFib();
      expect(vm.thisFib).toBe(1);
      expect(vm.lastFib).toBe(1);
      expect(vm.nFib).toBe(2);

      vm.nickFib()
      expect(vm.thisFib).toBe(2);
      expect(vm.lastFib).toBe(1);
      expect(vm.nFib).toBe(3);

      vm.iterativeFib()
      expect(vm.thisFib).toBe(3);
      expect(vm.lastFib).toBe(2);
      expect(vm.nFib).toBe(4);
    });

  });


});
