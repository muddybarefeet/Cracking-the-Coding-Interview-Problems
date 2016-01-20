// //implement a stack
// //Time Complexity: constant
// //Space Complexity: linear

//pseudoclassical:

var Stack = function () {

  this.stack = {};
  var length = 0;

  this.push = function (node) {
    this.stack[length] = node;
    length ++;
  };

  this.pop = function () {
    if (Object.keys(this.stack).length > 0) {
      delete this.stack[length-1];
      length --;
    }
  };

  this.size = function () {
    return length;
  };

};

//functional:

var Stack = function () {
  var stack = {};
  stack.length = 0;

  stack.push = function (node) {
   stack[this.length] = node;
   this.length ++;
  };

  stack.pop = function () {
    if (Object.keys(stack).length > 0) {
      delete stack[this.length-1];
      this.length --;
    }
  };

  this.size = function () {
    return length;
  };

  return stack;

};



//functional extended:

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function () {
  
  var stack = {};
  stack.length = 0;
  stack.storage = {};
  extend(stack, stackMethods);
  return stack;

};

var stackMethods = {

  push: function (node) {
   this.storage[this.length] = node;
   this.length ++;
  },

  pop: function () {
    if (Object.keys(this.storage).length > 0) {
      delete this.storage[this.length-1];
      this.length --;
    }
  },

  size: function () {
    return length;
  }

};



// //prototypal:

var Stack = function () {
  
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.length = 0;
  return stack;

};

var stackMethods = {

  push: function (node) {
   this.storage[this.length] = node;
   this.length ++;
  },

  pop: function () {
    if (Object.keys(this.storage).length > 0) {
      delete this.storage[this.length-1];
      this.length --;
    }
  },

  size: function () {
    return length;
  }

};

var s = Stack();
s.push(4);
s.push(9);
s.push(7);
s.push(7);
s.push(7);
s.pop();
s.pop();
console.log(s);

