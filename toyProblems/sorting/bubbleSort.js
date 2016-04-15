//Take the numbers in situe and swap if the left one is greater than the right
//once on pass has been made then see if it is totally sorted
//else recurse

//N.B.decided that I want to mutate the original array in this answer

//Time Complexity = exponential if fully un-sorted
//Space Complexity = constant (always only one bit of extra scace used not dependednt on size)

var swap = function (array, currentIndex) {
  //take the array and the current index and swap this with the index before
  //return updated array
  var currNum = array[currentIndex];
  array[currentIndex] = array[currentIndex-1];
  array[currentIndex-1] = currNum;

  return array;
};


var bubbleSort = function (array) {
  var hasBeenChanged;
  //loop through the array starting at one and compare to the item before
  for (var i = 1; i < array.length; i++) {
    if ( array[i] < array[i-1] ) {
      //then they need to be swapped
      swap(array, i);
      //mark a flag if anything gets changed so at the end know if sorted or not
      hasBeenChanged = true;
    }
  }

  return hasBeenChanged ? bubbleSort(array) : array;
};

var x = bubbleSort([4,3,7,2,1,9]);
console.log(x);

