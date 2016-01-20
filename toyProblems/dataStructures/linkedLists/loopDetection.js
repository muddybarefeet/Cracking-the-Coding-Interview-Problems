
//LINKED list copied in to answer question

var LinkedList = function(){
  //fill me in!
  this.head = null;
  this.tail = null;

};

LinkedList.prototype.addToTail = function (value) {

  var node = this.makeNode(value);

  if (this.head === null) {
    this.head = node;
  } else {
    this.tail.next = node;
  }

  this.tail = node;

};

LinkedList.prototype.removeHead = function () {

  if (this.head === this.tail) {
    delete this.head;
    delete this.tail;
  } else {
    var newHead = this.head.next;
    delete this.head;
    this.head = newHead;
  }

};

LinkedList.prototype.contains = function (searchVal) {

  var search = function (node) {

    if (!node) {
      return;
    }

    var isFound = false;

    if (node.value === searchVal) {
      isFound = true;
    }

    return isFound || search(node.next);

  };

  return search(this.head) || false;

};

LinkedList.prototype.makeNode = function (value) {

  var node = {};
  node.value = value;
  node.next = null;
  return node;

};

var list = new LinkedList();
list.addToTail(4);
list.addToTail(5);
list.addToTail(9);
list.addToTail(2);
list.addToTail(1);
list.addToTail(5);
list.addToTail(7);
list.addToTail(3);
list.tail.next = list.head.next.next;



//---------------------------------QUESTION-------------------------------------//
//given a circular linked list return the node that starts the loop

var loopDetection = function (list) {
  //loop through until meet
  //reset head and move one step at time till meet
  var slow = list.head;
  var fast = list.head.next.next;

  while (fast.value !== slow.value) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //if fast next = null then no loop
  if (fast === null || fast.next.next === null) {
    return null;
  }

  //reset slow
  slow = list.head;

  while (fast.value !== slow.value && fast.next !== slow.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  console.log(slow);

};

// var a = loopDetection(list);
// console.log('loop', a);