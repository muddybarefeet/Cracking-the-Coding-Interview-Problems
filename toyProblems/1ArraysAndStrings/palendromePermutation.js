//given a string see if it is a permutation of a palendrome (not limited to dictionary words)
//in this first attempt I am going to ignore spaces

//e.g. "Tact Cat" ---> true ("tacocat", "atcocta" ....)

//Time Complexity: liner
//Space complexity:

var palendromePermutations = function (str) {

  var letterFrequency = {};

  //counter to cout how many odd frequencies of letters there are
  var counter = 0;

  //remove the spaces from the input
  var removeSpaces = str.split(/\s+/).join('');

  //make an object of all the letters and their frequencies
  for (var i = 0; i < removeSpaces.length; i++) {
    if (letterFrequency[removeSpaces[i]]) {
      letterFrequency[removeSpaces[i]] ++;
    } else {
      letterFrequency[removeSpaces[i]] = 1;
    }
  }
  
  //if more than one letter has an odd frequency then return false
  for (var key in letterFrequency) {
    if (letterFrequency[key] % 2 !== 0) {
      counter ++;
    }
  }

  return counter <= 1 ? true : false;

};

// console.log(palendromePermutations("aabbccddeeg"));