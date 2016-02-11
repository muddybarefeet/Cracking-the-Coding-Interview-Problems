// Given a sorted array of distinct values, how do you find an index i such that array[i] = i? Let us call it a magic index.

// For example if the given array is [-23, -4, 2, 19, 56]. Element 2 is found at array[2]. So the output is 2.
// If there no such element in the array we can return -1.


var magicIndex = function (arr, leftIndex, rightIndex) {

  rightIndex = rightIndex || arr.length;

  //find the midpoint
  var diff = rightIndex - leftIndex;
  var midNum = Math.floor( diff / 2 );
  var midIndex = leftIndex + midNum;
  //find the range
  var highestIndex = arr.length-1;

  //case for all the same values?

  if (diff === 0) {

    return -1;

  } else {
    
    //if the difference is only one and the value is not the index return -------think on this....!
    if (diff === 1 && arr[midIndex] !== midIndex) {
      console.log('diff one');

      return -1;
    }
    
    //value and index  > highest index
    if (arr[midIndex] > highestIndex && midIndex > highestIndex || arr[midIndex] < 0 && midIndex < 0) {
      console.log('in midIndex being higher than array val or index');
      return -1;
    }


    //value > index look in first half
    if (arr[midIndex] > midIndex) {
       magicIndex(arr, 0, midIndex);
    }
    //value < index look in second half
    if (arr[midIndex] < midIndex) {
       magicIndex(arr, midIndex + 1);
    }

    //if the index and the value match return the value
    if (arr[midIndex] === midIndex) {
       arr[midIndex];
    }
  }


};

var a = magicIndex([56, 60,90, 220, 4000], 0);
// var a = magicIndex([-23, -4, -2, 0, 4], 0);
var a = magicIndex([56, 60,90, 220, 4000], 0);
console.log(a);
