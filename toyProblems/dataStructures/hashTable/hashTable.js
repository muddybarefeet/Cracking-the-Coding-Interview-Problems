
/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 100;

  result.insert = function (key, value){
    
    var inBucket = false;

    //hash the key to get the place in the array to insert the key and value
    var hash = getIndexBelowMaxForKey(key, storageLimit);

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
    }

    return [key, value];

  };

  result.retrieve = function (key) {

    //get the hash value of the key
    var hash = getIndexBelowMaxForKey(key, storageLimit);

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
    var hash = getIndexBelowMaxForKey(key, storageLimit);

    var indexAt = storage[hash];

    //if there is nothing at the hashed index return null
    if (indexAt === undefined) {
      return null;
    }

    //loop through the bucket looking fot the key
    for (var i = 0; i < indexAt.length; i++) {
      if (indexAt[i][0] === key) {
        delete indexAt[i];
      }
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

 var hashTable = makeHashTable();
hashTable.insert('Spielberg\'s best movie', 'Jaws');
hashTable.remove('Spielberg\'s best movie');
var value = hashTable.retrieve('Spielberg\'s best movie');
console.log(value);




