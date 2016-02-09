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

  result.inOrder = function(){
    var visited = [];
    
    var inner = function (result) {

      if (result.leftSide) {
        inner(result.leftSide);
        if (visited.indexOf(result.leftSide.value) === -1) {
          visited.push(result.leftSide.value);
        }
        visited.push(result.value);
      }
      if (result.rightSide) {
        inner(result.rightSide);
        if (visited.indexOf(result.rightSide.value) === -1) {
          visited.push(result.rightSide.value);
        }
      }

    };


    inner(this);

    console.log(visited);

    return visited;

  };

  result.inOrderGoogleDocs = function(root, visited){
    visited = visited || [];
    
    if (root.leftSide) {
      this.inOrderGoogleDocs(root.leftSide, visited);
      if (visited.indexOf(root.leftSide.value) === -1) {
        visited.push(root.leftSide.value);
      }
      visited.push(root.value, visited);
    }
    if (root.rightSide) {
      this.inOrderGoogleDocs(root.rightSide, visited);
      if (visited.indexOf(root.rightSide.value) === -1) {
        visited.push(root.rightSide.value);
      }
    }
    console.log('visited',visited);
    return visited;

  };


  return result;

};

  
// var ve = Tree(5);
// ve.insert(3);
// ve.insert(4);
// ve.insert(2);
// ve.insert(8);
// ve.insert(7);
// ve.insert(9);
// ve.inOrderGoogleDocs(ve);

