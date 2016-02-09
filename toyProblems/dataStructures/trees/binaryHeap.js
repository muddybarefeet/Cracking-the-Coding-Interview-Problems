//make a binary heap with an insert and extractMin property
//helper functions to be used:
//parentIndex = Math.floor( (index - 1) / 2 )
//childrenIndices = [index * 2 + 1, index * 2 + 2]

//N.B should have a swap helper function us currently lots of duplicate code here!

var BinaryHeap = function (sortFn) {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) {
    return i < j;
  };
  //allow the user to add a sorting function
  //so can be used for max or min heaps
  if (sortFn) {
    this.sort = sortFn;
  }
};

BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
};

BinaryHeap.prototype.insert = function (node) {
  //insert at the end of the _heap
  this._heap.push(node);
  //get the index of the current node in the heap
  var nodeIndex = this._heap.length - 1;
  
  var that = this;
  var inner = function (node, index) {

    var parentIndex = Math.floor( (index-1)/2 );
    if (parentIndex >= 0 && node < that._heap[parentIndex]) {
      that._heap[index] = that._heap[parentIndex];
      that._heap[parentIndex] = node;
      inner(that._heap[parentIndex], parentIndex);
    }
    return;
  };

  inner(node, nodeIndex);
  return this._heap;

};

BinaryHeap.prototype.extractMin = function () {
  //swap the last for the first
  var min = this.getRoot();
  var lastAdded = this._heap[this._heap.length-1];
  this._heap[0] = lastAdded;
  this._heap.splice(this._heap.length-1, 1);

  var that = this;
  var inner = function (node, index) {
    //check if the current node is less than the children if not swap
    var childrenIndices = [index * 2 + 1, index * 2 + 2];
    if (node > that._heap[childrenIndices[0]] && node > that._heap[childrenIndices[1]]) {//if node greater than its children swap with the smaller child
      if (childrenIndices[index] > childrenIndices[1]) {
        that._heap[index] = that._heap[childrenIndices[1]];
        that._heap[childrenIndices[1]] = node;
        inner(that._heap[childrenIndices[1]], childrenIndices[1]);
      } else {
        that._heap[index] = that._heap[childrenIndices[0]];
        that._heap[childrenIndices[0]] = node;
        inner(that._heap[childrenIndices[0]], childrenIndices[0]);
      }
    }

    //should add in a catch for one child being less than the node too!

    return;
  
  };

  inner(this._heap[0], 0);t
  return min;//return the removed root

};

// var heap = new BinaryHeap();
// heap.insert(9);
// heap.insert(5);
// heap.insert(2);
// heap.insert(8);s
// heap.insert(3);
// heap.extractMin();






