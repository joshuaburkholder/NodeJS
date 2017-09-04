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

router.get('/', function(req, res){
  res.send('Hello home page!');
});

// Route to ABOUT

router.get('/about', function(req, res){
  res.send('About stuff');
});

// Apply routes

app.use('/', router);




// SERVER START

app.listen(port);
console.log('Server listening on port ' + port);