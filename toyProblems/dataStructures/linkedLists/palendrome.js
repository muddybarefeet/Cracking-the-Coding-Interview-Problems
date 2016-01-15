
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
list.addToTail(3);
list.addToTail(9);
list.addToTail(4);



//---------------------------------QUESTION-------------------------------------//
//implement a function to test if a linked list is a palendrome

// Method 1:
//stack method: go through the list and make a stack
//loop through again and for each node pop one thing off the stack and check it

var isPalendrome = function (list) {

  stack = [];
  var result;

  //check that the head and tail are the same if not return
  if (list.head.value !== list.tail.value) {
    return false;
  }

  var makeStack = function (node) {
    stack.push(node.value);
    if (node.next === null) {
      return;
    }
    makeStack(node.next);
  };

  makeStack(list.head);
  var checkStack = function (node,stack) {

    var toPop = parseInt(stack.pop(), 10);
    if (node.value !== toPop) {
      result = false;
      return;
    }
    if (node.next === null) {
      result = true;
      return;
    }
    checkStack(node.next, stack);
  };

  checkStack(list.head, stack);

  return result;

};

console.log(isPalendrome(list, list.head));


//get midpoint and split the list 
//reverse the second half and compare beware the odd palendromes!
