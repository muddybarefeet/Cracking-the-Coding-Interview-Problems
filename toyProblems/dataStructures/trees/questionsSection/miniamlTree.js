//given a binary tree design an algorithm which creates a linked list of all the nodes at each depth

//make a binary tree diagram constructor

var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;

  result.insert = function(num) {//insert function

    if(num>this.value) {
      if(this.rightSide === null) {
        this.rightSide = Tree(num);
      } else {
        this.rightSide.insert(num);
      }
    } else {
      if(this.leftSide === null) {
        this.leftSide = Tree(num);
      } else {
        this.leftSide.insert(num);
      }
    }
  };

  return result;

};

var findMidAndInsert = function (tree, array) {
//take array and get mid
  var mid = Math.floor(array.length/2);
  if (array.length === 1) {
    mid = 0;
  }
//insert middle num to the tree
  tree.insert(array[mid]);
//return two arrays with middle num removed
  if (array.length > 1) {
    return [array.slice(0,mid), array.slice(mid+1)];
  }
  return false;
};


var makeTree = function (sortedArray) {

    //find the midpoint (floor)
    var midpoint = Math.floor(sortedArray.length/2);
    var tree = new Tree(sortedArray[midpoint]);

    var left = sortedArray.slice(0,midpoint);
    var right = sortedArray.slice(midpoint+1);

    var inner = function (left, right) {
      if(left && left.length > 0) { //on left side get two extra empty leaves??!

        var newArrays = findMidAndInsert(tree, left);
        if (newArrays) {
          inner(newArrays[0],newArrays[1]);
        }
      } if (right && right.length > 0) {

        var subArrays = findMidAndInsert(tree, right);
        if (subArrays) {
          inner(subArrays[0], subArrays[1]);
        }
      }

      return;

    };

    inner(left, right);
    // console.log('end',tree);
    return tree;

  };


makeTree([1,2,3,4,5,6,7,8,9]);


