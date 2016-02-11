// Given a sorted array of distinct values, how do you find an index i such that array[i] = i? Let us call it a magic index.

// For example if the given array is [-23, -4, 2, 19, 56]. Element 2 is found at array[2]. So the output is 2.
// If there no such element in the array we can return -1.


var magicIndex = function (arr, leftIndex, rightIndex) {

  rightIndex = rightIndex || arr.length;

  //find the difference between the indicies
  var diff = rightIndex - leftIndex;
  //find the half between them
  var midNum = Math.floor( diff / 2 );
  //translate this to the current array
  var midIndex = leftIndex + midNum;
  //find the highest number the index can be
  var highestIndex = arr.length-1;

  if (diff === 0) {

    return -1;

  } else {
    
    //value and index  > highest index
    if (arr[midIndex] > highestIndex || midIndex > highestIndex || arr[midIndex] < 0 || midIndex < 0) {
      return -1;
    }


    //value > index look in first half
    if (arr[midIndex] > midIndex) {
      return magicIndex(arr, 0, midIndex);
    }
    //value < index look in second half
    if (arr[midIndex] < midIndex) {
      return magicIndex(arr, midIndex + 1);
    }

    //if the index and the value match return the value
    if (arr[midIndex] === midIndex) {
      return arr[midIndex];
    }
  }


};

var a = magicIndex([56, 60,90, 220, 4000], 0);
// var a = magicIndex([-23, -4, -2, 0, 4], 0);
// var a = magicIndex([56, 60,90, 220, 4000], 0);
// var a = magicIndex([0,1,2,3,4,5], 0);
// var a = magicIndex([-100, 1, 4, 5, 4, 77, 101, 200], 0);

console.log(a);
