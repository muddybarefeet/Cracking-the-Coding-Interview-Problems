//Imagine a stack of plates. If the stack gets too big it might fall. So you would start a new pile.
//Implement a datastructure SetOfStacks that mimics this. SetOfStacks should be composed of several SetOfStacks
//and should create a new stack once the previous stack exceeds capacity.


var setOfStacks = function () {
  
  var newStack = function () {
    var stack = {};
    stack.length = 0;
    return stack;
  };

  this.container = {
    0: newStack()
  };

  var maxLength = 3;
  var length = 0; //length of main stack

  this.push = function (data) {
    //go to the value at the key length (last stack and either add to it/make new stack)
    if (this.container[length].length < maxLength) {
      var targetStack = this.container[length];
      var index = targetStack.length;
      targetStack[index] = data;
      targetStack.length ++;
    } else {
      //add a new stack and increase length of main container stack
      var nextStack = newStack();
      length++;
      this.container[length] = nextStack;
      this.container[length][newStack.length] = data;
      this.container[length].length ++;
    }
  };

  this.pop = function () {
    //get the length of the stack so far and go to this element in the this.stacks obj
    //here remove the last key and return the value

    if (length === 0 && this.container[length].length === 0) {
      return null;
    }

    var index = this.container[length].length-1;
    var temp = this.container[length][index];

    if (index === 0 && length > 0) {
      delete this.container[length];
      length--;
      return temp;
    }

    delete this.container[length][index];
    this.container[length].length--;
    return temp;

  };

  //pop opperation on a specific substack
  this.popAt = function (index) {
    var arrayOfVals = [];
    //go to this stack and call the pop opperation on it
    var targetStack = this.container[index];
    var temp = targetStack[targetStack.length-1];
    delete targetStack[targetStack.length-1];
    targetStack.length --;

    //what about arrays above this one?
    if (index !== length) {//if there is a stack/more above this one..
      var i = index+1;
      while(this.container[i]) {
        var stack = this.container[i];
        for (var key in this.container[i]) {
          if (key !== "length") {
            arrayOfVals.push(this.container[i][key]);
          }
        }
        delete this.container[i];
        length--;
        i++;
      }
    }
    //loop through the array and insert the values with push again
    for (var k = 0; k < arrayOfVals.length; k++) {
      this.push(arrayOfVals[k]);
    }

    //return the removed value
    return temp;

  };


};

// var st = new setOfStacks();
// st.push(5);
// st.push(9);
// st.push(2);
// st.push(7);
// st.push(22);
// st.push(17);
// st.push(1);
// st.push(8);
// st.popAt(0);

// console.log(st);