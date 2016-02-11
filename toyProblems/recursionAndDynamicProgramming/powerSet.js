//get all the possible combinations of an array
var a = 1;
var powerSet = function (arr) {

  var variations = {}; //sorted keys and true as the value

  var inner = function (newArr, leftToUse) {//[], [1,2,3]

    // console.log(newArr)
    newArr = newArr.sort();

    if (leftToUse.length === 0) {
      variations[newArr] = true;
      return;
    }
    //add new variation to the list
    variations[newArr] = true;

    //loop through the object and 
    for (var i = 0; i < leftToUse.length; i++) {
      //for each thing
      var copy = leftToUse.slice();
      copy.splice(i,1);
      inner(newArr.concat(leftToUse[i]), copy);
    }


  };

  inner([], arr);
  // console.log(Object.keys(variations))
  return Object.keys(variations); //this is not an array of arrays if needed can loop through and make each an array

};

powerSet([1,2,3]);



