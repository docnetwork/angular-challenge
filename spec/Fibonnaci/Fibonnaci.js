function Fibonnaci() {
}
Fibonnaci.prototype.currentNum = 0;
Fibonnaci.prototype.prev1 = 0;
Fibonnaci.prototype.prev2 = 1;
Fibonnaci.prototype.fibonacciSequenceIndex = 0;

Fibonnaci.prototype.simpleNextFib = function(num1, num2) {
  if(this.currentNum < 1){
    this.currentNum = num1 + num2;
    console.log("Simple - currentNum: ", this.currentNum)
  } else {
    this.prev1 = num2;
    this.prev2 = num1 + num2;
    this.currentNum = this.prev2;
    console.log("Simple - currentNum: ", this.currentNum)
  }
};

Fibonnaci.prototype.simpleResetFib = function() {
  this.prev1 = 0;
  this.prev2 = 1;
  this.currentNum = 0;
  console.log("Simple - reset currentNum end: ", this.currentNum)
  console.log("Simple - reset prev1 end:", this.prev1)
  console.log("Simple - reset prev2 end: ", this.prev2)
};

Fibonnaci.prototype.iterativeNextFib = function(num) {
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
};

Fibonnaci.prototype.recursiveNextFib = function(num) {
  if(num === 0){
    return 0;
  } else if(num === 1 || num === 2){
    return 1;
  } else {
    return this.recursiveNextFib(num - 1) + this.recursiveNextFib(num - 2);
  }
};

Fibonnaci.prototype.setFibCounter = function(incrementFibCounter) {
  incrementFibCounter ? this.fibonacciSequenceIndex++ : this.fibonacciSequenceIndex = 0;
  return this.fibonacciSequenceIndex
};

module.exports = Fibonnaci;
