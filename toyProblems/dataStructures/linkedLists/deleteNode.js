

//-----------------------------------Question-----------------------------//
//delete a node from a singly linked list only given the node;
//Time Complexity: constant
//Space Complexity: constant

var deleteNode = function (node) {

  var current = node;
  var next = current.next;
  var nextNext = current.next.next;

  if (node === null || n.next === null) {
    return false; //failure
  }

  //take the value from the node after and put it on current and then delete the following node
  current.value = next.value;
  current.next = nextNext;
  return true;

};



