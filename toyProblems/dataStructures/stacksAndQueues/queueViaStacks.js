//implement a queue with two stacks

var Stack = function () {

  this.stack = {};
  var length = 0;

  this.push = function (node) {
    this.stack[length] = node;
    length ++;
  };

  this.pop = function () {
    var temp = this.stack[length-1];
    if (Object.keys(this.stack).length > 0) {
      delete this.stack[length-1];
      length --;
    }
    return temp;
  };

  this.size = function () {
    return length;
  };

};

var Queue = function () {

  var inbox = new Stack();
  var outbox = new Stack();
  var lenght = 0;

  this.enqueue = function (data) {
    //if the stack is in the wrong place
    if (inbox.size() === 0 && outbox.size() > 0) {
      //want to move it over to the other stack
      this.swap();
    }
    inbox.push(data);
  };

  this.dequeue = function () {
    if (outbox.size() === 0) {
      this.swap();
    }
    return outbox.pop();
  };

  this.swap = function () {
    while (inbox.size() !== 0) {
      outbox.push(inbox.pop());
    }
  };

  // should return the number of items in the queue
  this.size = function(){
    return inbox.size() + outbox.size();
  };

};

