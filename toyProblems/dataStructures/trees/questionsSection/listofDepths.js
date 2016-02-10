//given a binary tree design an algorithm which creates a linked list of all the nodes at each depth

//make a binary tree diagram constructor

var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;

  result.insert = function(num) {//insert function

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
      value: this.value,
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

    var lists = [];
    var currentDepth = 0;
    for (var l = 0; l < listOfNodes.length; l++) {
      var list;
      //go through the nodes in the list
      if (listOfNodes[l].depth !== currentDepth || lists.length === 0) {
        currentDepth = listOfNodes[l].depth;//reset the current depth
        //make a new list and then add to this
        lists.push(new this.linkedList());
      }
      list = lists[lists.length -1];
      list.addToList(listOfNodes[l].value);
    }
    console.log('lists', lists);
    return lists;


  };

  //constructor for linked lists
  result.linkedList = function () {
    this.start = null;
    this.end = null;
    this.addToList = function (value) {
      console.log('value2', value);
      var node = new this.node(value);
      if (this.start === null) {
        this.start = node;
      } else {
        this.end.next = node;
      }
      this.end = node;
    };
    this.node = function (value) {
      var node = {};
      node.value = value;
      node.next = null;
      return node;
    };
  };

  result.makeNewList = function () {//function to create a new linked list
    return new this.linkedList();
  };

  return result;

};

  
// var ve = Tree(10);
// ve.insert(5);
// ve.insert(20);
// ve.insert(2);
// ve.insert(7);
// ve.insert(15);
// ve.insert(12);
// ve.listDepthsInLinkedList();


