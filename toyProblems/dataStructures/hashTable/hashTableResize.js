/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var rehash = function(){
  var result = {};
  var storage = [];
  var _storageLimit = 4;
  var _size = 0;

  var _rehash = function (newSize) {

    var oldTable = storage;
    storage = [];
    _storageLimit = newSize;
    _size = 0;

    for (var i = 0; i < oldTable.length; i++) {
      if (oldTable[i]) {
        for (var j = 0; j < oldTable[i].length; j++) {
          this.insert(oldTable[i][j][0], oldTable[i][j][1]);
        }
      }
    }

  };

  result.insert = function (key, value){
    
    var inBucket = false;

    //hash the key to get the place in the array to insert the key and value
    var hash = getIndexBelowMaxForKey(key, _storageLimit);

    //if nothing yet at the index
    if (storage[hash] === undefined) {
      storage[hash] = [];
    } else {
      //if bucket already has things in it check to see that the same key has not already been inserted
      for (var i = 0; i < storage[hash].length; i++) {
        if (storage[hash][i][0] === key) {
          //update the value if the same key is found
          inBucket = true;
          storage[hash][i][1] = value;
        }
      }

    }

    //if the key was not already in the bucket the add the key and value in a tuple
    if (!inBucket) {
      storage[hash].push([key, value]);
      _size++;
    }

    if (_size >= (_storageLimit * 0.75) ) {
      //rehash the table
      this.rehash(_storageLimit * 2);
    }

  };

  result.retrieve = function (key) {

    //get the hash value of the key
    var hash = getIndexBelowMaxForKey(key, _storageLimit);

    var indexAt = storage[hash];

    //if there is nothing at the hashed index return null
    if (!indexAt) {
      return null;
    }

    //loop through the bucket looking fot the key <---------------------------------------------------------------
    for (var i = 0; i < indexAt.length; i++) {
      var tuple = indexAt[i];
      if (tuple && tuple[0] === key) {
        return tuple[1];
      }
    }

  };

  result.remove = function (key) {

    //get the hash value of the key
    var hash = getIndexBelowMaxForKey(key, _storageLimit);

    var indexAt = storage[hash];

    //if there is nothing at the hashed index return null
    if (indexAt === undefined) {
      return null;
    }

    //loop through the bucket looking fot the key
    for (var i = 0; i < indexAt.length; i++) {
      if (indexAt[i][0] === key) {
        delete indexAt[i];
        _size--;
      }
    }

    if (size <= _storageLimit/4) {
      this.rehash(_storageLimit/2);

    }

  };

  return result;
};



// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};