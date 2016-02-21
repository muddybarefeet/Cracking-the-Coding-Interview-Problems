//You have a binary number and you can flip exactly one 0 to be a 1
//write code to find the longest sequence of ones

var flipBitToGetLongestOnes = function (sequence) {

  var currentIndex;
  var arrayOfCounts = [];
  var max = 0;

  for (var i = 0; i < sequence.length; i++) {
    //loop through the sequence and make array of arrays of counts
    if (arrayOfCounts.length === 0) {
      arrayOfCounts.push([sequence[i],1]);//push in the number and the count of that number
      currentIndex = 0;
    } else {
      if (sequence[i] === arrayOfCounts[currentIndex][0]) {
        arrayOfCounts[currentIndex][1] += 1;
      } else {
        arrayOfCounts.push([sequence[i], 1]);
        currentIndex += 1;
      }
    }
  }

  //now we have our array of arrays and we want to go through and work out the best place to place a 1
  //if the next thing i
  for (var k = 0; k < arrayOfCounts.length; k++) {
    //if there are two things after the current ... ---->  we are assuming for this problem that there will always be a zero somewhere in the array
    if (arrayOfCounts[k+1] && arrayOfCounts[k+2]) {
      //if the current thing is a 1 and then next things count === 1
      if (arrayOfCounts[k][0] === '1' && arrayOfCounts[k+1][1] === 1) {
        var newCount = arrayOfCounts[k][1] + arrayOfCounts[k+1][1] + arrayOfCounts[k+2][1];
        if (newCount > max) {
          max = newCount;
        }
        k++;
      }
    }
  }


  return max;

};

// var a = flipBitToGetLongestOnes('111111111011111111111');
// console.log(a);