//take a string of characters and compress it to a string of letters and their frequencies
//if the original string is not longer than the compressed string return the original String
//the string only contains letters

//example = "aaabbbccccc" ----> "a3b3c5"
//another example = "aabbcc" -----> "aabbcc"

//Time Complexity: liner
//Space complexity:

var stringCompression = function (str) {

  var letterFreq = {};
  var result = "";

  //make an object of letter frequencies and make string from this
  for (var i = 0; i < str.length; i++) {
    if (letterFreq[str[i]]) {
      letterFreq[str[i]] ++;
    } else {
      letterFreq[str[i]] = 1;
    }
  }

  for (var key in letterFreq) {
    result += key + letterFreq[key];
  }

  //check lengths and return letter needed
  return str.length <= result.length ? str : result;

};

// var a = stringCompression('wwwwwww');
// console.log(a);