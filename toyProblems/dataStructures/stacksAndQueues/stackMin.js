//make a stack that in addition to pop and push had a min() that in CONSTANT time
//returns the minimum value in a stack
//if a duplicate value equal to the min is added nothing gets added to the min count but this is ok as the one stored will always be the last in the store anyway
//Time complexity: worst case Linear


var Stack = function () {

  this.stack = {};
  var length = 0;
  var min;//variable that is an array of arrays(Each inner array holds two values. A value and the length at that value)

  this.push = function (node) {
    if (!min) {
      min = [[node, length]];
    } else if (node < min[min.length-1][0]) {
      min.push([node, length]);
    }
    this.stack[length] = node;
    length ++;
    return this.statck;
  };

  this.pop = function () {
    if (Object.keys(this.stack).length > 0) {
      //if the current thing to remove is the current thing
      if (min[min.length-1][0] === this.stack[length-1]) {
        min.pop();
      }
      delete this.stack[length-1];
      length --;
    }
  };

  this.min = function () {
    if (min) {
      var lastInMinStackPosition = min[min.length-1][1];
      return this.stack[lastInMinStackPosition];
    } else {
      return null;
    }
  };

  this.size = function () {
    return length;
  };

};

// var s = new Stack();
// s.push(5);
// s.push(9);
// s.push(2);
// var a = s.min();
// console.log(a);
