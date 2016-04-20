//keep halving the array until it is split into individual numbers
//then join the ones back together a pair at a time

//Time Complexity: nlogn (all things are linear but they have to be done logn times)
//Space Complexity: linear

//function to split the array up
var mergeSort = function (array) {
  if ( array.length === 1 ) {
    //nothing to sort
    return array;
  }
  //take an array, find the half way point and split it
  var midPoint = Math.floor(array.length/2);

  var left = array.slice(0,midPoint);
  var right = array.slice(midPoint);

  return merge( mergeSort(left), mergeSort(right) );

};

//function to merge the numbers back together
var merge = function (a,b) {
  //remember that a and b might be different lengths
  var subSort = [];
  //need to take the 0th index from both array and compare
  //make new array and add the smaller into this repeatedly until nothing is left
  var leftIndex = 0;
  var rightIndex = 0;

  while ( a[leftIndex] && b[rightIndex] ) {
    //look at the first index in both arrays and get the larger and increment that index
    if (a[leftIndex] > b[rightIndex]) {
      subSort.push(b[rightIndex]);
      rightIndex++;
    } else {
      subSort.push(a[leftIndex]);
      leftIndex++;
    }
  }
  //if an odd number of items then find out which one is left
  if ( a[leftIndex] ) {
    subSort.push(a[leftIndex]);
  } else if ( b[rightIndex] ) {
    subSort.push(b[rightIndex]);
  }

  return subSort;

};

var a = mergeSort([9,4,2,8,1]);
console.log(a);

