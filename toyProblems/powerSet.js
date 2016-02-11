//get all the possible combinations of an array

var powerSet = function (arr) {

  var variations = [];

  var inner = function (newArr, leftToUse) {//[], [1,2,3]
    debugger;

    variations.push([newArr]);

    if (leftToUse.length === 0 || newArr.length === arr.length) {
      return;
    }
    //take the passed in newArr pass a copy of the value to variations
    if (newArr.length < leftToUse.length) {
      //copy the leftToUse array for each recursive call
      //remove a letter and pass letter and remaining to the recursive call
      for (var k = 0; k < leftToUse.length; k++) {
        var copy = leftToUse.slice(0);
        newArr = newArr + leftToUse[k];
        copy.splice(k, k+1);
        inner(newArr, copy);
      }
    }

  };

  inner("", arr);
  //remove the duplicates in variations
  console.log('end',variations);
  return variations;

};

powerSet([1,2,3]);

