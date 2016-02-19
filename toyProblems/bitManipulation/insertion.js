//you are given two 32 bit numbers and two indexes such that they are the length of the second input
//input the second into the first at the given indexes

//example:
//N = 10000000000 and M = 1011, i = 2, j = 6
//Output = 10001001100

var invert = function (x){
  var e = x.toString(2).split('');
  var newInvert = e.map(function (element) {
     return parseInt(element,2) === 0 ? 1 : 0;
  }).join('');
  return parseInt(newInvert, 2);
};

var insertBinaryNumbers = function (num1, num2, i, j) {

  //make a line of all ones 
  var allOnes = ~0;

  //shift in j amount of 0's +1 ----> 11100000
  var left = allOnes << (j+1);

  //shift 1 over i --> 100
  var shift = (1 << i);
  //make the inverse of the shift --> 011
  var right = invert(shift);

  //merge the two together ---->11100011
  var clearedNum1 = left | right;

  //left shift num2 by i
  var new2 = num2 << i;
  //add new2 and the updated 1
  return clearedNum1 | new2;


};

var a = insertBinaryNumbers(21, 10, 0, 3);
console.log(a.toString(2));
