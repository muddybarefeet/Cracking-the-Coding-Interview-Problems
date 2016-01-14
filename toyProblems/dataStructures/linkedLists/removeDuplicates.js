//remove duplicate values in an unsorted linked list

//Time Complexity: linear?
//Space Complexity: constant

var removeDuplicates = function () {

  var previous = this.head;
  var current = previous.next;
  var seenSoFar = {};

  seenSoFar[previous] = true;

  while (current.next !== null) {
    if (!seenSoFar[current.value]) {
      seenSoFar[current.value] = true;
    } else {
      previous.next = current.next;
    }
    previous = current;
    current = previous.next;
  }

};