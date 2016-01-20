//make a queue:
//using an object as storage seemed easier as when deleting data you do not have to worry about the comma
//Time Complexity: constant
//Space Complexity: linear

var Queue = function () {

  this.queue = {};
  var start = 0;
  var end = 0;

  this.enqueue = function (node) {
    //add node to the end of the queue
    this.queue[end] = node;
    end++;

  };

  this.dequeue = function () {
    //take the first thing in the queue off
    delete this.queue[start];
    start++;

  };

};

var q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.enqueue(1);
q.enqueue(6);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.queue);
