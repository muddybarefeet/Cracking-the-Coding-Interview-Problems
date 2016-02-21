//given a positive intiger print the next smallest and next biggest numbers that have the same number of one bits

var nextNumber = function (number) {

  var smaller;
  var larger;
  var binaryRep = number.toString(2);
  var copyBinary = binaryRep.slice(0).split('');

  var sum = binaryRep.split('').reduce(function (prev, element) {
    return prev + parseInt(element,10);
  }, 0);
  
  if (sum === 1 && larger === undefined || binaryRep.length === sum) {   //one 1 in the binary num
    //move the only one <---- to make larger
    copyBinary.unshift('1');
    copyBinary[1] = '0';
    larger = copyBinary.join('');
    copyBinary = binaryRep.split('');
  }

  //all ones
  if (binaryRep.length === sum) { //larger dealt with above
    //then want to return the smaller then need to return twos compliment
    //inverse and add one
    var twosComplement = ~(binaryRep) + 1;
    smaller = twosComplement;

  } else {
    //loop through from the right 
    for (var i = binaryRep.length - 1; i >= 0; i--) {
      //on the first zero with a one to the left swap
      if (binaryRep[i] === '0' && binaryRep[i+1] === '1' && larger === undefined) {
        var tempLarger = copyBinary[i+1];
        copyBinary[i+1] = copyBinary[i];
        copyBinary[i] = tempLarger;
        larger = copyBinary.join('');
      }
      if (binaryRep[i] === '0' && binaryRep[i-1] === '1' && smaller === undefined) {
        var tempSmaller = copyBinary[i-1];
        copyBinary[i-1] = copyBinary[i];
        copyBinary[i] = tempSmaller;
        smaller = copyBinary.join('');
      }
    }
  }

  return [smaller, larger];

};


//All zeros? Zero is not counted as a positive or a negative integer so ignoring this possibility

var a = nextNumber(7);
console.log(a);



