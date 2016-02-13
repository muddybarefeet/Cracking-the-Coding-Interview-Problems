//Imagine a robot sitting on the top left hand corner of a n * m grid with r rows and c columns.
//The robot can only move in two directions: right or down.
//design an algorithm to find a path from the top left to the bottom right of the board.

//certain cells are off limits such that the robot cannot step on them.

var getNextCoords = function (position, grid) {

  var newUp;
  var newLeft;
  newUp = [position[0] - 1, position[1]];
  newLeft = [position[0], position[1] - 1];

  //make sure position[0] and position[1] are in bounds and then the square is not blocked
  if ( (position[0] - 1) < 0 || grid [newUp[0]] [newUp[1]] === 1) {
    newUp = null;
  }

  //make sure row and position[1] are in bounds and then the square is not blocked
  if ( (position[1] - 1) < 0 || grid [newLeft[0]] [newLeft[1]] === 1) {
    newLeft = null;
  }

  return [ newUp, newLeft];

};

var robotPaths = function (grid, startCoords, memo) {

  var counter = 0;
  memo = memo || {};
  
  //possible places can be moved to 
  var options = getNextCoords(startCoords, grid);

  //go through given options and check if the places getting to if not see if 
  //already stored and if not stored then call the function to get the answer for that coord
  options.forEach(function (coord) {
    if (coord !== null) {
      if (coord[0] === 0 && coord[1] === 0) {
        counter++;
        return counter;
      }
      memo[coord] = memo[coord.toString()] || robotPaths(grid, coord, memo);
      counter += memo[coord.toString()]; //add the value of the coord in memo to the counter
    }
  });

  return counter;

};

var position = [2,2];

var a = robotPaths([[0,0,0],[0,0,0], [0,0,0]], position, {});
console.log(a);

  //old code no memo/store for values seen

  // //place the piece on the bottom corner of the board
  // var lastRow = grid.length - 1;
  // // lastRow[lastRow.length -1] = 1; not technically needed here as only moving left or up so will not cross the same path again on one route

  // //counter
  // var counter = 0;

  // //inner function takes x and y values
  // var inner = function (row, col, grid) {

  //   // console.log('row and col----->', row, col);
  //   //if points at the start
  //   if (row === 0 && col === 0) {
  //     counter++;
  //     return;
  //   }

  //   //get the new coords of the possible squares to move to
  //   var newCoords = getNextCoords(row, col, grid);

  //   //if something returned then loop through
  //   if (newCoords) {
  //     for (var i = 0; i < newCoords.length; i++) {
  //       //recurse on new coords
  //       if (newCoords[i] !== null) {
  //         inner(newCoords[i][0], newCoords[i][1], grid);
  //       }
  //     }
  //   } else {
  //     return;
  //   }

  // };

  // inner(lastRow, grid[0].length - 1 , grid);
  // // console.log(counter);
  // return counter;


