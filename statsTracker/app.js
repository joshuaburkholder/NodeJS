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

app.listen(3000, function(){
  console.log("Application running.")
});

//require models: Activity, Category, User

