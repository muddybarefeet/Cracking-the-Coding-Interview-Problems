

//LINKED list copied in to answer question

var LinkedList = function(){
  //fill me in!
  this.head = null;
  this.tail = null;

};

LinkedList.prototype.addToTail = function (value) {

  var node = makeNode(value);

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

var makeNode = function (value) {

  var node = {};
  node.value = value;
  node.next = null;
  return node;

};

var list = new LinkedList();
list.addToTail(4);
list.addToTail(5);


var secondList = new LinkedList();
secondList.addToTail(9);
secondList.addToTail(2);
secondList.addToTail(7);


//---------------------------------QUESTION-------------------------------------//

//take a linked list. All the values are single numbers but all together and reversed make a number
//e.g. 7 -> 5 -> 1  = number 157
//given two linked lists sum them (return the new linked list)

//Time Complexity: linear with respect to the number of nodes
//Space Complexity: linear (make new linkedList)


var sumLinkedList = function (newList, node1, node2, remainder) {

  remainder = remainder || 0;

  //sum the two node values
  var add = node1.value + node2.value;

  //add any remainder from the previous sum and reset remainder to 0
  if (remainder > 0) {
    add += remainder;
    remainder = 0;
  }
  //make the number an array to manipulate
  var keepNum = add.toString().split('');

  var newSum;
  //sort out if remainder
  if (keepNum.length > 1) {
    newSum = parseInt(keepNum.splice(keepNum.length-1, 1),10);
    remainder = parseInt(keepNum, 10);
  } else {
    newSum = parseInt(keepNum, 10);
  }

  //take the new number and insert new node to the new list
  newList.addToTail(newSum);

  //if the next val of both is null then return as at the end of the list
  if (node1.next === null && node2.next === null) {
    return newList;
  }

  //if either node individually has a next value of null ...
  if (node1.next === null) {
    node1.next = makeNode(0);
  } else if (node2.next === null) {
    node2.next = makeNode(0);
  }

  return sumLinkedList(newList, node1.next, node2.next, remainder);

};

// var toBeMadeList = new LinkedList();
// console.log(sumLinkedList(toBeMadeList, list.head, secondList.head));



