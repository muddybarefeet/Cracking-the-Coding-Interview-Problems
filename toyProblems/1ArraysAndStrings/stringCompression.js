//take a string of characters and compress it to a string of letters and their frequencies
//if the original string is not longer than the compressed string return the original String
//the string only contains letters

//example = "aaabbbccccc" ----> "a3b3c5"
//another example = "aabbcc" -----> "aabbcc"

//Time Complexity: liner
//Space complexity: with respect to how repetative your letters are (constant to linear)

var stringCompression = function (str) {

  var letterFreq = [];
  var result = "";
  var currentLetter = str[0];
  var letterCount = 0;

  //loop through the string and for each letter count frequency
  for (var i = 0; i < str.length; i++) {
    if (currentLetter !== str[i]) {
      result += currentLetter + letterCount;
      letterCount = 0;
    }
    currentLetter = str[i];
    letterCount++;
  }

  //to get the last letter 
  result += currentLetter + letterCount;

  //check lengths and return letter needed
  return str.length <= result.length ? str : result;

};

// var a = stringCompression('anna');
// console.log(a);