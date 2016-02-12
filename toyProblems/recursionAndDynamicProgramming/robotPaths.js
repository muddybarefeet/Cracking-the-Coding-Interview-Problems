//Imagine a robot sitting on the top left hand corner of a n * m grid with r rows and c columns.
//The robot can only move in two directions: right or down.
//design an algorithm to find a path from the top left to the bottom right of the board.

//certain cells are off limits such that the robot cannot step on them.

var getNextCoords = function (row, col, grid) {

  var newUp;
  var newLeft;

  newUp = [row - 1, col];
  newLeft = [row, col - 1];

  //make sure row and col are in bounds
  if ( (row - 1) < 0) {
    newUp = null;
  }

  if ( (col - 1) < 0) {
    newLeft = null;
  }

  return [ newUp, newLeft];

};

var robotPaths = function (grid) {

  //place the piece on the bottom corner of the board
  var lastRow = grid.length - 1;
  // lastRow[lastRow.length -1] = 1; not technically needed here as only moving left or up so will not cross the same path again on one route

  //counter
  var counter = 0;

  //inner function takes x and y values
  var inner = function (row, col, grid) {
    
    // console.log('row and col----->', row, col);
    //if points at the start
    if (row === 0 && col === 0) {
      counter++;
      return;
    }

    //get the new coords of the possible squares to move to
    var newCoords = getNextCoords(row, col, grid);

    //if something returned then loop through
    if (newCoords) {
      for (var i = 0; i < newCoords.length; i++) {
        //recurse on new coords
        if (newCoords[i] !== null) {
          inner(newCoords[i][0], newCoords[i][1], grid);
        }
      }
    } else {
      return;
    }

  };

  inner(lastRow, grid[0].length - 1 , grid);
  console.log(counter);
  return counter;

};

// robotPaths([[0,0,0],[0,0,0], [0,0,0]]);

