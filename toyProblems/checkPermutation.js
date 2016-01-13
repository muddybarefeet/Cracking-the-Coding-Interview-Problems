//given two strings write a method to decide if one is a permutation of the other
//0(n logn) and 0(n) solutions
//e.g. "kate", "take" = true, "hello", "migrane" = false


//the time complexity of this function is 0(4n) --> 0(n)
//if I wanted 0(n logn) I would use a sort function and then compare the two.
//could break the map out into another function so it is not called multiple times in the main function body

//Space complexity:

var checkPermutations = function (str1, str2) {

  var str1Obj = {};
  var str2Obj = {};

  //make letters all lower case
  str1 = str1.toLowerCase().split('');
  str2 = str2.toLowerCase().split('');

  //map the arrays to the objects
  str1.map(function (element) {
    if (str1Obj[element]) {
      str1Obj[element] ++;
    } else {
      str1Obj[element] = 1;
    }
  });

  str2.map(function (element) {
  if (str2Obj[element]) {
    str2Obj[element] ++;
  } else {
    str2Obj[element] = 1;
  }
  });

  //check the keys are the same length
  if (Object.keys(str1Obj).length !== Object.keys(str2Obj).length) {
    return false;
  }

  //loop through one and compare its keys to the other
  for (var key in str1Obj) {
    //check the key exists in the other object
    if (!str2Obj[key]) {
      return false;
    //check the values/count is the same
    } else if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }

  return true;

};

// console.log(checkPermutations('motisfont', 'motisfontq'));