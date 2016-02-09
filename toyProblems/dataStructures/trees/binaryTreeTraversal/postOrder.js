//binary tree that when searching visits the current node before its children



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

  result.postOrder = function(){
    var visited = [];
    
    var inner = function (result) {

      if (result.leftSide) {
        inner(result.leftSide);
        visited.push(result.leftSide.value);
        if (result.rightSide) {
          inner(result.rightSide);
          visited.push(result.rightSide.value);
        }
      }

    };

    inner(this);
    visited.push(this.value);
    return visited;

  };

  return result;

};

  
var ve = Tree(5);
ve.insert(3);
ve.insert(4);
ve.insert(2);
ve.insert(8);
ve.insert(7);
ve.insert(9);
ve.postOrderGoogleDocs();

