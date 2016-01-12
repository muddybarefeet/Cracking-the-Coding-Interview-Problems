//write a method to replace all spaces in a string with "%20". You may assume that the string 
//has sufficient space at the end to hold additional charactersand that you are given the true length of the string.

//eg. "Mr John Smith        ", 13
//----> "Mr%20John%20Smith"

var URLify = function (str) {

  //remove trailing whitespace on either side of a string
  str = str.trim();

  //remove the duplicate spaces
  var removeDupSpace = str.split(/\s{2,}/).join(' ');

  //replace all spaces with "%20"
  return removeDupSpace.replace( / /g, '%20' );

};

// var a = URLify("My     name    is Anna     ");
// console.log(a);