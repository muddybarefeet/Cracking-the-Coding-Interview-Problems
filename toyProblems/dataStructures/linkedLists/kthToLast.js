
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
list.addToTail(9);
list.addToTail(22);
list.addToTail(72);
list.addToTail(58);
list.addToTail(11);


//---------------------------------QUESTION-------------------------------------//
//return the kth to last element in a singly linked list
//Time Complexity: linear with respect to the kth number
//Space Complexity:

var kthToLastElement = function (num, list) {

  var leader;
  var follower = list.head;

  var counter = 0;

  leader = list.head;

  for (var i = 0; i < num; i++) {
    leader = leader.next;
    counter++;
  }

  while (leader.next !== null) {
    leader = leader.next;
    follower = follower.next;
  }

  return follower;

};

// kthToLastElement(7, list);
