//you are given two 32 bit numbers and two indexes such that they are the length of the second input
//input the second into the first at the given indexes

//example:
//N = 10000000000 and M = 1011, i = 2, j = 6
//Output = 10001001100

var insertBinaryNumbers = function (num1, num2, i, j) {

  var diff = (j-i) + 1;
  var mask = (~((~(-1<<diff))<<i)>>>0);//shift -1 by the difference left then invert then shift left by i and then invert again

  //clear the bits where you will insert num2
  var clearBits = num1 & mask;

  //left shift num2 by i
  var new2 = num2 << i;
  //add new2 and the updated 1
  return clearBits | new2;


};

// var a = insertBinaryNumbers(21, 10, 0, 3);
// console.log(a.toString(2));
