var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


//ROUTES

app.route('/login')
   .get(function(req, res){
      res.send('Login Form');
   })
   .post(function(req,res){
      console.log('processing...');
      res.send('logging you in');
   });


app.get('/sample', function(req, res){
  res.send('Sample app');
});

// Create an instance of the Express router
var router = express.Router();

// Route middlewware
router.use(function(req, res, next){

  //log each reqest to the console
  console.log(req.method, req.url);

  //continue processings the request
  next();
})


// Route to HOME 
router.get('/', function(req, res){
  res.send('Hello home page!');
});

// Route to ABOUT
router.get('/about', function(req, res){
  res.send('About stuff');
});

// Route middleware to validate
router.param('name', function(req, res, next, name){
  // complete validation
  // validation
  // log something to test
  console.log('Validating ' + name);

  // once validation is complete, save new item
  req.name = name;
  next();
})

// Create route with parameters
router.get('/hello/:name', function(req, res){
  res.send('hello ' + req.params.name + '!');
});

// Apply routes
app.use('/', router);


// SERVER START
app.listen(port);
console.log('Server listening on port ' + port);