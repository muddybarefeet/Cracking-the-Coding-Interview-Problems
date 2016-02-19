//passed a decimal between 0 and 1, make a function to convert the number to binary

var convertFractionToBinary = function (fraction, numSoFar) {
  // debugger;
  //times the fraction by two
  var double = (fraction * 2).toFixed(2);

  if (parseInt(double,10) === 0) {
    return "0"+"."+numSoFar;
  }

  if (numSoFar.length > 32 || fraction > 1 || fraction < 0) {
    return "ERROR!";
  }

  //take the number to the left of the decimal point and append to numSoFar
  var toAdd = double.split('.')[0];

  numSoFar += toAdd;

  //turn num at start of double to 0
  double = 0 + "." + double.split('.')[1];

  //recurse
  return convertFractionToBinary(double, numSoFar);


};

var a = convertFractionToBinary(0.5, "");
console.log(a);