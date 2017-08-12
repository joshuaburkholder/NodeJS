var mongoose = require('mongoose'),
    Todo = mongoose.model('todo'),
    controller = {};

//collect & display all todo's
controller.index = [
  function(req, res, next){
      //fn to collect & render view to display todo's
  }
];

//create a todo
controller.create = [
  function(req, res, next){
    //fn to validate input
    next();
  },
  function(){
    //fn to create teh todo, send json obj
  }
];

//update a todo
controller.update = [
  function(req, res, next){
    //load the todo to be updated
    //validate input
    next();
  },
  function(req, res, next){
    //update todo, send back json obj
  }
];

//delete a todo
controller.delete = [
  function(req, res, next){
    //remove a todo - res 201
  }
];

//export controller 
module.exports = controller;
