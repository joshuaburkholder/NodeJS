var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


//ROUTES

app.get('/sample', function(req, res){
  res.send('Sample app');
});

// Create an instance of the Express router

var router = express.Router();

// Route to HOME 

// Route to ABOUT

// Apply routes





// SERVER START

app.listen(port);
console.log('Server listening on port ' + port);