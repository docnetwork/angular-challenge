describe('The Fibonacci Controller', function() {


  var $controller;

  beforeEach(module('main'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));



  it('is defined', function() {
    var FibController = $controller('FibCtrl')
    expect(FibController).toBeDefined();
  });


});
