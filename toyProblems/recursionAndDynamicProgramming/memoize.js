/* Memoization: attempts to increase a function’s performance 
by caching its previously computed results. 
Each time a memoized function is called, its parameters are used to index the cache. If the data 
is present, then it can be returned, without executing the entire function.  However, if the 
data is not cached, then the function is executed, and the result is added to the cache.*/

var numb = function (num) {
  return num+29;
};

var memoize = function (fn) {

  var cache = {};//function args index the cache

  return function () {

    var args = Array.prototype.slice.call(arguments);

    if (cache.hasOwnProperty(args.toString())) {
      return cache[args];
    }
    cache[args] = fn(args[0]);
    return cache[args];

  };

};

var a = memoize(numb);
console.log(a(5));