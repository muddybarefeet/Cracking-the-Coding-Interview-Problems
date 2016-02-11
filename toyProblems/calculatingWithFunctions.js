//This time we want to write calculations using functions and get the results. Let's have a look at some examples:

//seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// The most outer function represents the left operand, the most inner function represents the right operand

function times (seven) { //7 passed in

  return function (five) {
    return seven * five;
  };
 
}

function makeSum(num, fn) {
  if (fn) {
    return fn(num);
  }
  return num;
}

function seven (fn) {
  return makeSum(7, fn); //invocation of times triggered with 7 in it
}

function five (fn) {
  return makeSum(5, fn); //returns 5 as no function passed in
}


var a = seven(times(five()));
console.log(a);
