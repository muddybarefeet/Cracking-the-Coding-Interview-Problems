//if an element in a nXm matrix is 0 then make the rest of the row and column zero

// can I use 0(n) additional space?
//can i use the matrix itself for data storage?

//Time Complexity: quadratic
//Space Complexity:

var zeroMatrix = function (matrix) {

  var matrixCopy = matrix.slice(0);
  var rows = [];
  var cols = [];
  var rowLength = matrixCopy[0].length;
  var rowToChange = [];

  //make array of zeros to sub in for rows with zeros in
  for (var p = 0; p < rowLength; p++) {
    rowToChange.push(0);
  }

  //find all the positions of the zeros in the matrix
  for (var i = 0; i < matrixCopy.length; i++) {
    for (var j = 0; j < matrixCopy[i].length; j++) {
      if (matrixCopy[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  //if not zeros then return the matrix
  if (rows.length && cols.length === 0) {
    return matrix;
  }

  //loop through coords and make each row 0's
  for (var k = 0; k < matrixCopy.length; k++) {
    if (rows.indexOf(k) !== -1) {
      matrixCopy[k] = rowToChange;
    } else {
      for (var m = 0; m < cols.length; m++) {
        matrixCopy[k][cols[m]] = 0;
      }
    }

  }

  return matrixCopy;

};

// var a = zeroMatrix([[2,3,0,3],[1,9,5,1],[0,3,6,3]]);
// console.log(a)
