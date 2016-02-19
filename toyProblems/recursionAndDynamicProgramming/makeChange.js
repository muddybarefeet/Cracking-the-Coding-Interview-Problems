/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function (targetVal) {

  var counter = 0;
  var options = [1,2,5,10,20,50,100,200];
  var seen = {};

  var inner = function (numSoFar, sum) {

    sum = sum || "";

    //check still less than the target
    if (numSoFar > targetVal) {
      return;
    }
    if (numSoFar === targetVal) {
      sum = sum.split('').sort().join('');
      if (!seen[sum]) {
      console.log('seen in if', sum);
        seen[sum] = true;
        counter++;
      }
      return;
    }

    //loop through the options
    for (var i = 0; i < options.length; i++) {
      if (options[i] <= targetVal) {
        // console.log(numSoFar, 'plus:',options[i], '=', numSoFar+options[i]);
        //add next value to the numSoFar
        //if less than the target recurse again
        inner(numSoFar + options[i], sum + options[i]);
      }
    }

    return;

  };

  inner(0);

  return counter;

};

var a = makeChange(5);
console.log(a);


//trying to make a version with a cache!
// var makeChangeCache = function (total, sum, seen, counter, memo) {

//   var options = [1, 2, 5, 10, 20, 50, 100, 200];
//     // debugger;
//   var counter;
//   sum = sum || "";
//   seen = seen || {};
//   // counter = counter || 0;
//   memo = memo || {};
//   // debugger;
//   // //check total less not less than 0
//   // if (total < 0) throw new Error("Somthing wong!");

//   if (total === 0) {
//     sum = sum.split('').sort().join('');
//     if (!seen[sum]) {
//       seen[sum] = true;
//       console.log('memo', memo);
//     }
//     return Object.keys(seen).length;
//   }

//   // //loop through the options
//   for (var i = 0; i < options.length; i++) {
//       // debugger;
//     if (options[i] <= total) {
//       console.log(total, 'minus:',options[i], '=', total-options[i]);
//       //add next value to the numSoFar
//       //if less than the target recurse again
//       if (memo[total] === undefined) {
//         memo[total] = makeChangeCache(total - options[i], sum + options[i], seen, 0, memo);
//       }
//       // console.log('memo', memo);
//       console.log('seen', seen);
//       counter += memo[total];
//     }
//   }

//   return counter;

// };

// var a = makeChangeCache(3);
// console.log(a);

