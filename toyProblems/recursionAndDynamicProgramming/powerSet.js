//get all the possible combinations of an array

var powerSet = function (arr) {

  var variations = []; //sorted keys and true as the value
  var seen = {};

  var inner = function (newArr, leftToUse) {//[], [1,2,3]

    newArr = newArr.sort();

    if (leftToUse.length === 0) {
      if(!seen[newArr]) {
        seen[newArr] = true;
        variations.push(newArr);
      }
      return;
    }

    //add new variation to the list
    if(!seen[newArr]) {
      seen[newArr] = true;
      variations.push(newArr);
    }

    //loop through the object and 
    for (var i = 0; i < leftToUse.length; i++) {
      //for each thing
      var copy = leftToUse.slice();
      copy.splice(i,1);
      inner(newArr.concat(leftToUse[i]), copy);
    }


  };

  inner([], arr);

  // console.log(variations);
  return variations;

};

powerSet([1,2,3]);



