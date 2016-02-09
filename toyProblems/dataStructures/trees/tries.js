//way to store letters as words in 0(k) time (k being the length of the word) lookup
//hash table good for whole words but not prefixes
//I will assume that there are only letters in the words I am going to insert

var Trie = function (value) {
  this.value = value || null;
  this.children = [];
};

Trie.prototype.insertWord = function (word) {

  var letter = word[0];

  if (word.length > 0) {//if the word has length
    var index;
    this.children.forEach(function (child, i) {
      if (child.value === letter) {//if there is a child with the same letter
        index = i;//store the index
      }
    });
    if (index === undefined) { //if no child then insert it and store its index
      var letterNode = new Trie(letter);
      this.children.push(letterNode);
      index = this.children.length-1;
    }

    var newWord = word.slice(1);//remove the inserted letter from the word
    this.children[index].insertWord(newWord);//recurse on the shortened word

  }

  return this;

};

var oak = new Trie();
oak.insertWord('anna');
oak.insertWord('ant');



