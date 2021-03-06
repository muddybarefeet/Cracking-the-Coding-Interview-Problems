
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
list.addToTail(4);
list.addToTail(9);
list.addToTail(9);
list.addToTail(8);
list.addToTail(9);
list.addToTail(9);
list.addToTail(4);
list.addToTail(9);



//---------------------------------QUESTION-------------------------------------//

//remove duplicate values in an unsorted linked list

//Time Complexity: linear
//Space Complexity: constant

var removeDuplicates = function (list) {

  var previous = list.head;

  var current = previous.next;
  var seenSoFar = {};

  seenSoFar[previous.value] = true;

  while (current.next !== null) {

    if (!seenSoFar[current.value]) {
      seenSoFar[current.value] = true;
    } else {
      previous.next = current.next;
    }
    previous = current;
    current = previous.next;

  }

  return list;

};

// console.log(removeDuplicates(list));

//what about not with an object?
//have a runner to check the num on with the rest of the linked
var removeDuplicates2 = function (list) {

  var current = list.head;

  while (current.next !== null) {
    
    var runner = current;

    while (runner.next !== null) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }

  return list;

};

console.log(removeDuplicates2(list));
