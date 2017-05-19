describe('Fibonnaci', function(){
  var Fibonnaci = require('./Fibonnaci');
  var fibonnaci;
  var fibNumSequence = [0,1,1,2,3,5,8,13];

  beforeEach(function() {
    fibonnaci = new Fibonnaci();
  });

  it("should progress through fibonnaci sequence correctly by adding previous two numbers", function() {

    console.log("Simple - currentNum: ", fibonnaci.currentNum)
    fibonnaci.simpleNextFib(fibonnaci.prev1, fibonnaci.prev2);
    expect(fibonnaci.currentNum).toEqual(1);
    fibonnaci.simpleNextFib(fibonnaci.prev1, fibonnaci.prev2);
    expect(fibonnaci.currentNum).toEqual(1);
    fibonnaci.simpleNextFib(fibonnaci.prev1, fibonnaci.prev2);
    expect(fibonnaci.currentNum).toEqual(2);
    fibonnaci.simpleNextFib(fibonnaci.prev1, fibonnaci.prev2);
    expect(fibonnaci.currentNum).toEqual(3);
    fibonnaci.simpleNextFib(fibonnaci.prev1, fibonnaci.prev2);
    expect(fibonnaci.currentNum).toEqual(5);
    fibonnaci.simpleNextFib(fibonnaci.prev1, fibonnaci.prev2);
    expect(fibonnaci.currentNum).toEqual(8);
    fibonnaci.simpleNextFib(fibonnaci.prev1, fibonnaci.prev2);
    expect(fibonnaci.currentNum).toEqual(13);

  });

  it("should reset currentNum to 0, prev1 to 0, and prev2 to 1 ... simpleResetFib", function(){
    fibonnaci.currentNum = 13;
    fibonnaci.prev1 = 8;
    fibonnaci.prev2 = 13;
    console.log("Simple - reset currentNum start: ", fibonnaci.currentNum)
    console.log("Simple - reset prev1 start: ", fibonnaci.prev1)
    console.log("Simple - reset prev2 start: ", fibonnaci.prev2)
    fibonnaci.simpleResetFib();
    expect(fibonnaci.currentNum).toEqual(0);
    expect(fibonnaci.prev1).toEqual(0);
    expect(fibonnaci.prev2).toEqual(1);
  })

  it("should progress through fibonnaci sequence correctly via an iterative process", function() {

    var iterativeNextFib = fibonnaci.iterativeNextFib;

    fibNumSequence.map(function(fib, index){
      expect(iterativeNextFib(index)).toEqual(fib);
      console.log(" Iterative - currentNum: ", iterativeNextFib(index));
    });

  });

  it("should progress through fibonnaci sequence correctly via a recursive process", function() {

    var recursiveNextFib = function(index){
      return fibonnaci.recursiveNextFib(index);
    }

    fibNumSequence.map(function(fib, index){
      expect(recursiveNextFib(index)).toEqual(fib);
      console.log(" Recursive - currentNum: ", recursiveNextFib(index));
    })

  });

  it("should reset fibonacciSequenceIndex to 0", function(){
    fibonnaci.fibonacciSequenceIndex = 13;
    console.log("Iterative && Recursive Fibonnaci Sequence Index - reset start: ", fibonnaci.fibonacciSequenceIndex)
    expect(fibonnaci.setFibCounter()).toEqual(0)
    console.log("Iterative && Recursive Fibonnaci Sequence Index - reset end: ", fibonnaci.fibonacciSequenceIndex);
  })

  it("should increment fibonacciSequenceIndex by 1", function(){
    fibonnaci.fibonacciSequenceIndex = 3;
    console.log("Iterative && Recursive Fibonnaci Sequence Index - increment start: ", fibonnaci.fibonacciSequenceIndex);
    expect(fibonnaci.setFibCounter(true)).toEqual(4);
    console.log("Iterative && Recursive Fibonnaci Sequence Index - increment end: ", fibonnaci.fibonacciSequenceIndex);
  })

  // it("should increment fibonacciSequenceIndex by 1 - End", function(){
  //   fibonnaci.fibonacciSequenceIndex = 3;
  //   expect(fibonnaci.setFibCounter(true)).toEqual(4);
  // })



})
