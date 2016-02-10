//given a binary tree design an algorithm which creates a linked list of all the nodes at each depth

//make a binary tree diagram constructor

var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;

  result.insert = function(num) {

    if(num>result.value) {
      if(result.rightSide === null) {
        result.rightSide = Tree(num); //here!
      } else {
        result.rightSide.insert(num);
      }
    } else {
      if(result.leftSide === null) {
        result.leftSide = Tree(num);
      } else {
        result.leftSide.insert(num);
      }
    }
  };

  result.listDepthsInLinkedList = function () {
    //make a list of the nodes with thier depths
    var listOfNodes = [];
    var depth = 0;

    listOfNodes.push({
      node: this,
      depth: depth
    });

    var inner = function (node) {

      for (var i = 0; i < listOfNodes.length; i++) {
        if (listOfNodes[i].node.leftSide) {
          listOfNodes.push({
            node: listOfNodes[i].node.leftSide,
            value: listOfNodes[i].node.leftSide.value,
            depth: listOfNodes[i].depth + 1
          });
        }
        if (listOfNodes[i].node.rightSide) {//if it has children
          listOfNodes.push({
            node: listOfNodes[i].node.rightSide,
            value: listOfNodes[i].node.rightSide.value,
            depth: listOfNodes[i].depth + 1
          });
        }
      }

      return;

    };

    inner(this);//to get a list of all the elements and their depths
    // console.log(listOfNodes);

    //go through the list and if same as b4 depth add to list
    //if diff depth make a new linked list
    console.log(this.makeNewList());
    var list = this.makeNewList();

    var currentDepth = 0;
    for (var l = 0; l < listOfNodes.length; l++) {
      //go through the nodes in the list
      if (listOfNodes[l].depth === currentDepth) {
        list.addToList(listOfNodes[l].value);
      } else {
        currentDepth = listOfNodes[l].depth;//reset the current depth
        //make a new list and then add to this
      }
    }


  };

  result.linkedList = function () {
    this.start = null;
    this.end = null;
    this.addToList = function (value) {
    var node = new this.node(value);
    if (this.start === null) {
      this.start = node;
    } else {
      this.end.next = node;
    }
    this.end = new this.node(value);
  };

  result.node = function (value) {
    var node = {};
    node.value = value;
    node.next = null;
  };

  result.makeNewList = function () {
    return new this.linkedList();
  };

  return result;

};

  
var ve = Tree(10);
ve.insert(5);
ve.insert(20);
ve.insert(2);
ve.insert(7);
ve.insert(15);
ve.insert(12);
ve.listDepthsInLinkedList();


// var x = ve.bredthFirstRecursion(ve);

