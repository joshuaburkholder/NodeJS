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


//require models: Activity, Category, User

// app set up
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());



//define routes

app.listen(3000, function(){
  console.log("Application running.")
});


