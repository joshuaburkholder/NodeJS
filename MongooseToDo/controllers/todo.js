var mongoose = require('mongoose'),
    Todo = mongoose.model('todo'),
    controller = {};

//collect & display all todo's
controller.index = [
  function(req, res, next){
      //fn to collect & render view to display todo's
    Todo.find({},function(err, todos){
      if(err) return next(err);
      res.render('todo/index', {todos:todos})
    });
  }
];

//create a todo
controller.create = [
  function(req, res, next){
    //fn to validate input
    if("name" in req.body && req.body.name !== ''){
      next();
    } else {
      res.send(400);
    }
  },
  function(req, res, next){
    //fn to create the todo, send json obj
    Todo.create(req.body, function(err, todo){
      if(err) return next(err);
      res.json(todo);
    })
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
