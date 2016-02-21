//Imagine that you have a call centre which has three levels of employees: Respondent, Manager and Director.
//A call must first go to a Respondent who is free. If they cannot answer the call then it must be passed to the manager.
//If they can't answer the call then it should go to the Director. Design the classes and datas tructures for this probem.
//Imprement a method called dispatchCall() which assigns a call to the first available empolyee

var queue = [];
var managersQueue = [];
var directorsQueue = [];

var Call = function (level, length) {
  this.level = level; //one, two or three
  this.length = length;
};

var dispatchCall = function (level, length) {
  var call = new Call(level, length);
  queue.push(call);
  console.log('queue', queue);
};

//sent by an employee to take a new call
var findNewCall = function () {

  var newCall;
  if (!this.isBusy && queue.length > 0) {
    this.takeCall(queue.shift());

    //CODE FOR MANAGERS AND DIRECTORS QUEUES TO BE SHIFTED FROM ------- to be re implemented

    // if (this.type === 'manager') {
    //   newCall = managersQueue.shift();
    // } else if (this.type === 'respondent') {
    // } else {
    //   newCall = directorsQueue.shift();
    // }
    // console.log('for respondent', queue.shift());
    // console.log('finding call newCall', newCall);
    // this.takeCall(newCall);//pass in shifted off call
  }
};


//employee classes
var Respondent = function (managers) {
  this.type = "repondent";
  this.isBusy = false;
  this.managers = managers;
  this.passedUp = false;
  setInterval(findNewCall.bind(this), 3000);
  //function to set the isBusy for a certain period of time
};

Respondent.prototype.takeCall = function (call) {
  var that = this;
  console.log('take call respondent', call);
  //if the call can be answered by the resondent then set isBusy
  if (call.level === 3) {
    console.log('call level should be 3', call.level);
    this.isBusy = true;
    setTimeout(function () {
      this.isBusy = false;
    }.bind(this), call.length);
    console.log('isBusy', this.isBusy);
  } else {
    //loop through the managers of the respondent and find the next free one
    for (var i = 0; i < this.managers.length; i++) {
      console.log('searching managers to see who is free');
      if (!this.managers[i].isBusy) {
        console.log('found not busy manager', this.managers[i]);
        this.managers[i].takeCall(call);
        this.passedUp = true;
        break;
      }
    }
    //if it was not passed up to a manager then add to managers queue
    if (!this.passedUp) {
      console.log('not found a free manager so call added to the managers queue');
      managersQueue.push(call);
    }
    this.passedUp = false;
  }
};

var Manager = function (directors) {
  this.type = "manager";
  this.isBusy = false;
  this.directors = directors;
  this.passedUp = false;
  //function to check if calls ready to be answered if not busy
  // setInterval(findNewCall.bind(this), 3000);
};

Manager.prototype.takeCall = function (call) {
  console.log('take call manager', call);
  if (call.level === 2) {
    this.isBusy = true;
    setTimeout(function () {
      this.isBusy = false;
    }.bind(this), call.length);
    console.log('busy', this.isBusy);
  } else {
    //if not the right level then needs passing to director
    for (var i = 0; i < this.directors.length; i++) {
      console.log('looking for free director');
      if (!this.directors[i].isBusy) {
        console.log('found free director', this.directors[i]);
        this.directors[i].takeCall(call);
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

var Director = function () {
  this.type = "director";
  this.isBusy = false;
  //look in the directors queue and see if any calls to answer
  // setInterval(findNewCall.bind(this), 3000);
};

Director.prototype.takeCall = function (call) {
  console.log('take call director', call);
  // var that = this;
  if (call.level === 1) {
    this.isBusy = true;
    setTimeout(function () {
      console.log('this', this.isBusy);
      this.isBusy = false;
    }.bind(this), call.length);
  }
};

//make this work!

var directors = [];
for(var i=0; i<2; i++){
  directors.push(new Director());
}

var managers = [];
for(var i=0; i<2; i++){
  managers.push(new Manager(directors));
}

var respondents = [];
for(var i=0; i<4; i++){
  respondents.push(new Respondent(managers));
}


setTimeout(function(){
  var time = Math.random()*10000;
  var level = Math.floor(Math.random()*3) + 1;
  var length = Math.floor(Math.random()*2000);

  console.log('making call', time, 1, length);

  setTimeout(function(){
    dispatchCall(1,length);
  }, time);

}, 1000);

//Questions that could be asked:

//how many managers per person?
//maybe inherit from one base class? DO this when working
//one manager have one director and one respondent have one manager?

