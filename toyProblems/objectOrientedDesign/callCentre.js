//Imagine that you have a call centre which has three levels of employees: Respondent, Manager and Director.
//A call must first go to a Respondent who is free. If they cannot answer the call then it must be passed to the manager.
//If they can't answer the call then it should go to the Director. Design the classes and datas tructures for this probem.
//Imprement a method called dispatchCall() which assigns a call to the first available empolyee

var queue = [];
var managersQueue = [];
var directorsQueue = [];

var Call = function (level, length) {
  this.level = level;
  this.length = length;
};

var dispatchCall = function (level, length) {
  var call = new Call();
  queue.push(call);
};

var findNewCall = function () {
  var newCall;
  if (!that.isBusy && queue.length > 0) {
    if (that.type === 'manager') {
      newCall = managersQueue.shift();
    } else if (that.type === 'respondent') {
      newCall = queue.shift();
    } else {
      newCall = directorsQueue.shift();
    }
    that.takeCall();
  }
};


//employee classes
var Respondent = function () {
  this.type = "repondent";
  this.isBusy = false;
  this.managers = [];
  this.passedUp = false;
  //function to check if calls ready to be answered if not busy
  this.checkStatus = function () {
    var that = this;
    setInterval(findNewCall, 1000);
  };
  //function to set the isBusy for a certain period of time
  this.takeCall = function (call) {
    var that = this;
    //if the call can be answered by the resondent then set isBusy
    if (call.level === 3) {
      setTimeout(function () {
        that.isBusy = true;
      }, call.length);
    } else {
      //loop through the managers of the respondent and find the next free one
      for (var i = 0; i < this.managers.length; i++) {
        if (this.managers[i].isBusy) {
          this.managers[i].takeCall();
          that.passedUp = true;
          break;
        }
      }
      //if it was not passed up to a manager then add to managers queue
      if (!that.passedUp) {
        managersQueue.push(call);
      }
      that.passedUp = false;
    }
  };
};

var Manager = function () {
  this.type = "manager";
  this.isBusy = false;
  this.directors = [];
  this.passedUp = false;
  //function to check if calls ready to be answered if not busy
  this.checkStatus = function () {
    var that = this;
    setInterval(findNewCall, 1000);
  };
  this.takeCall = function (call) {
    var that = this;
    if (call.level === 2) {
      setTimeout(function () {
        that.isBusy = true;
      }, call.length);
    } else {
      //if not the right level then needs passing to director
      for (var i = 0; i < this.directors.length; i++) {
        if (!this.directors[i].isBusy) {
          this.directors[i].takeCall();
          this.passedUp = true;
          break;
        }
      }
      if (!this.passedUp) {
        //need to add to directors queue
        directorsQueue.push(call);
      }
      this.passedUp = false;
    }
  };

};

var Director = function () {
  this.type = "director";
  this.isBusy = false;
  //look in the directors queue and see if any calls to answer
  this.checkStatus = function () {
    var that = this;
    setInterval(findNewCall, 1000);
  };
  //take a call
  this.takeCall = function (call) {
    var that = this;
    if (call.level === 2) {
      setTimeout(function () {
        that.isBusy = true;
      }, call.length);
    }
  };
};