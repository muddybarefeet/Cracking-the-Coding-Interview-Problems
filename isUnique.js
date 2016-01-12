//function to determine if a string has all unique characters. What if you can't use additional data structures? Case does not matter.

//e.g. "anna" = false, "kate" = true


//above is liner time
var isUnique = function (str) {

  //first make all letters lower case
  str = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;

};
