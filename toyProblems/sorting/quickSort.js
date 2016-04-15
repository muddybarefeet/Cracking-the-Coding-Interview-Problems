//take array pick random Number
//anything less than it gets pushed to one array and anthing more than it gets pushed to the other
//concat the results together when returning

var quickSort = function (array) {

  //edge case if the array only contrains one thing then return (also use for base case of recursion)
  if (array.length <= 1) {
    return array;
  }
  var randomNum = Math.floor(Math.random()*array.length);
  var pivot = array[randomNum];

  var left = [];
  var right = [];


  for (var i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  console.log(left);
  console.log(right);

  return quickSort(left).concat(quickSort(right));

};

var a = quickSort([4,6,2,8,1]);
console.log(a);
