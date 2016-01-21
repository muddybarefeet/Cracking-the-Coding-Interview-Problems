//There an animal shelter for dogs and cats
//The have a first in first out policy.
//A person cal select the oldest animal in the shelter OR specify if they want a dog or a cat and get the one thats been there the longest.
//make this with a queue

var Queue = function () {

  this.queue = {};
  var start = 0;
  var end = 0;

  this.enqueue = function (node) {
    //add node to the end of the queue
    this.queue[end] = node;
    end++;

  };

  this.dequeue = function () {
    //take the first thing in the queue off
    var temp = this.queue[start];
    delete this.queue[start];
    start++;
    return temp;

  };

  this.peek = function () {
    return this.queue[start];
  };

};

//------------------------Solution----------------------------------//

var AnimalQueue = function () {

  this.dogs = new Queue();
  this.cats = new Queue();

  //basic way to show a timestamp/counter
  var counter = 0;

  this.enqueue = function (animal) {
    if (animal[1] === "Dog") {
      this.dogs.enqueue([animal[0], counter]); //node.value will be an array containing the animal name and the 'time' of insertion
    } else {
      this.cats.enqueue([animal[0], counter]);
    }
    counter++;
  };

  this.dequeueAny = function () {
    if (this.cats.peek()[1] < this.dogs.peek()[1]) {
      this.dequeueCat();
    } else {
      this.dequeueDog();
    }
  };

  this.dequeueDog = function () {
    return this.dogs.dequeue();
  };

  this.dequeueCat = function () {
    return this.cats.dequeue();
  };

};

// var animal = new AnimalQueue();
// animal.enqueue(["Scar", "Cat"]);
// animal.enqueue(["Rufus", "Dog"]);
// animal.enqueue(["Tascha", "Dog"]);
// animal.enqueue(["Sasi", "Cat"]);
// animal.enqueue(["Tito", "Cat"]);
// animal.enqueue(["Tarn", "Dog"]);
// animal.dequeueAny();
// animal.dequeueAny();
// animal.dequeueAny();
// console.log(animal);
