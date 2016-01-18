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
list.addToTail(2);
list.addToTail(5);
list.addToTail(7);
list.addToTail(22);


var secondList = new LinkedList();
secondList.addToTail(1);
secondList.addToTail(5);
secondList.addToTail(7);
secondList.addToTail(22);



//-------------------------Question---------------------------//
//given two singly linked lists determine if the two lists intersect and return the intersecting node
//example:

/*1  
  |  
  2  4
   \/
   5
   |
   7
   |
   9
 -> true*/
//loop through once and get the lengths and the last node value
//if the values do not match then return false
//if lengths differ in length remove the diff from the start of the longer list
//traverse with pointers until the two nodes are the same return the node

//Time Complexity: linear( 0(a+b) where a and b are the length of the two linked lists) 
//Space Complexity: constant space

var getListLength = function (linkedList) {
  var lengthList = 0;
  var node = linkedList.head;
  while (node !== null) {
    lengthList++;
    node = node.next;
  }
  return lengthList;
};

var intersection = function (list1, list2) {

  var lengthList1 = getListLength(list1);
  var lengthList2 = getListLength(list2);
  var difference;
  var longer;
  var shorter;
  var node1 = list1.head;
  var node2 = list2.head;

  if (list1.tail.value !== list2.tail.value) {
    return false;
  }

  //get the differences in linked list length APPARENTLY THEY ARE ALWAYS DIFFERENT
  if (lengthList1 !== lengthList2) {
    difference = Math.abs(lengthList2-lengthList1);
    if (lengthList1 > lengthList2) {
      longer = node1;
      shorter = node2;
    } else {
      longer = node2;
      shorter = node1;
    }
  } else { //if the same length it does not matter on the variable names as the start point is the same for both
    longer = node1;
    shorter = node2;
  }

  var counter = 0;
  while(counter < difference) {
    longer = longer.next;
    counter++;
  }

  //walk through until the nodes are the same and the next values are the same
  while (longer.next !== null && shorter.next !== null) {
    if (shorter.value === longer.value && shorter.next.value === longer.next.value) {
      //can return either of the nodes at this point as both on the same value
      return shorter;
    }
    longer = longer.next;
    shorter = shorter.next;
  }

  return false;

};

// var intersect = intersection(list, secondList);
// console.log(intersect);
