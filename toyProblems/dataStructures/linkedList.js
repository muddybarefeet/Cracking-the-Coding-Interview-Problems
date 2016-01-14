/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


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

// var list = new LinkedList();
// list.addToTail(4);
// list.addToTail(5);
// console.log(list.contains(4));
// console.log(list.contains(5));
// console.log(list.contains(6));
