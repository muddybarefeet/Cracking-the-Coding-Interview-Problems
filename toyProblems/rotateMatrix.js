//given an image n*n write a method to rotate by 90 degrees either way in place

//Time Complexity: quadratic
//Space complexity:

var rotateMatrix = function (matrix, direction) {

  var lengthInner = matrix[0].length;
  var cols = [];

  for (var i = 0; i < matrix.length; i++) {
    var array = [];
    for (var j = 0; j < matrix[i].length; j++) {
      array.push(matrix[j][i]);
    }
    if (direction === "clockwize") {
      array = array.reverse();
    }
    cols.push(array);
    array = [];
  }

  return cols;

};

// var r = rotateMatrix([[1,2,3],[4,5,6],[7,8,9]], "clockwize");
// console.log(r);


