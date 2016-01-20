//make a stack that in addition to pop and push had a min() that in CONSTANT time
//returns the minimum value in a stack


var Stack = function () {

  this.stack = {};
  var length = 0;
  var min;//variable that is an array of two values: node and its index

  this.push = function (node) {
    if (!min) {
      min = [node, length];
    } else if (node < min) {
      min = [node, length];
    }
    this.stack[length] = node;
    length ++;
  };

  this.pop = function () {
    if (Object.keys(this.stack).length > 0) {
      //if the current thing to remove is the current thing
      if (min[1] === length-1) {
        //HOW TO KNOW WHAT THE NEXT SMALLEST THING IN THE LINKED LIST IS WITHOUT LOOKING THROUGH THE LIST AGAIN?!
      }
      delete this.stack[length-1];
      length --;
    }
  };

  this.min = function () {
    if (min) {
      return this.stack[min[1]];
    } else {
      return null;
    }
  };

  this.size = function () {
    return length;
  };

};