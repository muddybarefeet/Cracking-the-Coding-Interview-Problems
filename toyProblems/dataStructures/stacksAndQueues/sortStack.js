//sort a stack with only one other empty stack available to you


//----------Stack Class------------------------------------//
var Stack = function () {

  this.stack = {};
  var length = 0;

  this.push = function (node) {
    this.stack[length] = node;
    length ++;
  };

  this.pop = function () {
    var temp;
    if (Object.keys(this.stack).length > 0) {
      temp = this.stack[length-1];
      delete this.stack[length-1];
      length --;
    }
    return temp;
  };

  this.isEmpty = function () {
    if (!this.stack[0]) {
      return true;
    } else {
      return false;
    }
  };

  this.peek = function () {
    return this.stack[length-1];
  };

  this.size = function () {
    return length;
  };

};

// var s = new Stack();
// s.push(3);
// s.push(7);
// s.push(4);
// s.push(90);
// s.push(9);
// s.push(19);
// s.push(30);
// s.push(1);


//-------------Sorted Stack---------------------------//

var sortStack = function (stack) {

  var helperStack = new Stack();

  //move one element to the helper stack to get things going
  helperStack.push(stack.pop());

  //while stack is not empty
  while(!stack.isEmpty()) {
    //take the top thing from stack and save in temp variable
    var temp = stack.pop();

    while (!helperStack.isEmpty() && helperStack.peek() < temp) {
      stack.push(helperStack.pop());
    }
    //put temp on helper in correct place
    helperStack.push(temp);
  }

  return helperStack;

};

// console.log(sortStack(s));