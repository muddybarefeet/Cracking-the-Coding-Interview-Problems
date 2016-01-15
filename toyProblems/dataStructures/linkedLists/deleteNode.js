

//-----------------------------------Question-----------------------------//
//delete a node from a singly linked list only given the node;

var deleteNode = function (node) {

  var current = node;
  var next = current.next;
  var nextNext = current.next.next;

  //take the value from the node after and put it on current and then delete the following node
  current.value = next.value;
  current.next = nextNext;
  next.next = null;

};



