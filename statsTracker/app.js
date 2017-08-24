const express = require('express'),
      parseurl = require('parseurl'),
      bodyParser = require('body-parser'),
      path = require('path'),
      expressValidator = require('express-validator'),
      mustacheExpress = require('mustache-express'),
      uniqueValidator = require('mongoose-unique-validator'),
      mongoose = require('mongoose'),
      session = require('express-session');

const app = express();

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/babystats');

//require models: Activity, Category, User
const Activity = require('./models/activity');
const Category = require('./models/category');
const User = require('./models/user');

// app set up
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

//define routes

app.get('/', function(req, res){
  res.redirect('api/splash');
});

//  // confirm connection
  app.use(function(req, res, next){
    console.log('You are now connected');
  })

//Create a new category

app.post('/api/home', function(req, res){
  Category.create({
    activity_type: req.body.category,
  }).then(activity => {
    res.redirect('/api/home')
  });
});




app.listen(3000, function(){
  console.log("Application running.")
});

module.exports = app;


