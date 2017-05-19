describe('Fibonacci', function(){
  var Fibonacci = require('./Fibonacci');
  var fibonacci;
  var fibNumSequence = [0,1,1,2,3,5,8,13];

  beforeEach(function() {
    fibonacci = new Fibonacci();
  });

  it("should progress through fibonacci sequence correctly by adding previous two numbers", function() {

    console.log("Simple - currentNum: ", fibonacci.currentNum)
    fibonacci.simpleNextFib(fibonacci.prev1, fibonacci.prev2);
    expect(fibonacci.currentNum).toEqual(1);
    fibonacci.simpleNextFib(fibonacci.prev1, fibonacci.prev2);
    expect(fibonacci.currentNum).toEqual(1);
    fibonacci.simpleNextFib(fibonacci.prev1, fibonacci.prev2);
    expect(fibonacci.currentNum).toEqual(2);
    fibonacci.simpleNextFib(fibonacci.prev1, fibonacci.prev2);
    expect(fibonacci.currentNum).toEqual(3);
    fibonacci.simpleNextFib(fibonacci.prev1, fibonacci.prev2);
    expect(fibonacci.currentNum).toEqual(5);
    fibonacci.simpleNextFib(fibonacci.prev1, fibonacci.prev2);
    expect(fibonacci.currentNum).toEqual(8);
    fibonacci.simpleNextFib(fibonacci.prev1, fibonacci.prev2);
    expect(fibonacci.currentNum).toEqual(13);

  });

  it("should reset currentNum to 0, prev1 to 0, and prev2 to 1 ... simpleResetFib", function(){
    fibonacci.currentNum = 13;
    fibonacci.prev1 = 8;
    fibonacci.prev2 = 13;
    console.log("Simple - reset currentNum start: ", fibonacci.currentNum)
    console.log("Simple - reset prev1 start: ", fibonacci.prev1)
    console.log("Simple - reset prev2 start: ", fibonacci.prev2)
    fibonacci.simpleResetFib();
    expect(fibonacci.currentNum).toEqual(0);
    expect(fibonacci.prev1).toEqual(0);
    expect(fibonacci.prev2).toEqual(1);
  })

  it("should progress through fibonacci sequence correctly via an iterative process", function() {

    var iterativeNextFib = fibonacci.iterativeNextFib;

    fibNumSequence.map(function(fib, index){
      expect(iterativeNextFib(index)).toEqual(fib);
      console.log(" Iterative - currentNum: ", iterativeNextFib(index));
    });

  });

  it("should progress through fibonacci sequence correctly via a recursive process", function() {

    var recursiveNextFib = function(index){
      return fibonacci.recursiveNextFib(index);
    }

    fibNumSequence.map(function(fib, index){
      expect(recursiveNextFib(index)).toEqual(fib);
      console.log(" Recursive - currentNum: ", recursiveNextFib(index));
    })

  });

  it("should reset fibonacciSequenceIndex to 0", function(){
    fibonacci.fibonacciSequenceIndex = 13;
    console.log("Iterative && Recursive Fibonacci Sequence Index - reset start: ", fibonacci.fibonacciSequenceIndex)
    expect(fibonacci.setFibCounter()).toEqual(0)
    console.log("Iterative && Recursive Fibonacci Sequence Index - reset end: ", fibonacci.fibonacciSequenceIndex);
  })

  it("should increment fibonacciSequenceIndex by 1", function(){
    fibonacci.fibonacciSequenceIndex = 3;
    console.log("Iterative && Recursive Fibonacci Sequence Index - increment start: ", fibonacci.fibonacciSequenceIndex);
    expect(fibonacci.setFibCounter(true)).toEqual(4);
    console.log("Iterative && Recursive Fibonacci Sequence Index - increment end: ", fibonacci.fibonacciSequenceIndex);
  })

  // it("should increment fibonacciSequenceIndex by 1 - End", function(){
  //   fibonacci.fibonacciSequenceIndex = 3;
  //   expect(fibonacci.setFibCounter(true)).toEqual(4);
  // })



})
