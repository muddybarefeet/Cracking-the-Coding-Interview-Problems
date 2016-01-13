//given two strings see if by inserting a character, removing a character or relacing a character the strings can be the same

//we can only do something to one letter not to all duplicate letters in the sting

//e.g. 'place', 'plane' ---> true
//     'place', 'pla' ---> false
//     'place', 'blame' ---> flase

var oneAway = function (str1, str2) {

  var longest;
  var longest2;
  var shortest;
  var sameLength = false;
  var counter = 0;

  //return if the length diff is greater than 1
  var lengths = [str1.length, str2.length];
  var diff = Math.abs(lengths[0] - lengths[1]);
  if (diff > 1) {
    return false;
  }

  //see if they are the same length- this means can only replace a letter
  if (str1.length === str2.length) {
    sameLength = true;
    longest = str1;
    longest2 = str2;
  } else if (str1.length > str2.length) {
    longest = str1;
    shortest = str2;
  } else {
    longest = str2;
    shortest = str1;
  }

  for (var i = 0; i < longest.length; i++) {
    //compare each letter of longest to shortest
    if (counter > 1) {
      return false;
    }

    if (sameLength) {
      if (longest[i] !== longest2[i]) {
        counter++;
        var arr = longest2.split('');
        arr.splice(i,1,longest[i]);
        longest2 = arr.join('');
      }
    } else if (longest[i] !== shortest[i] ) {
      counter++;
      //add the current letter in longest into shortest
      shortest = shortest.split('');
      shortest.splice(i,0,longest[i]);
      shortest = shortest.join('');
    }

  }

  return counter > 1 ? false : true;

};

// var a = oneAway('band','brand');
// console.log(a);



