var express = require('express'),
    app = express(),
    port = 8080,
    MongoClient = require('mongodb').MongoClient,
    bodyParser = require('body-parser'),
    morgan = require('morgan');

app.use(bodyParser());

app.use(morgan('tiny'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

MongoClient.connect('mongodb://127.0.0.1:27017/member', function(err, db){
  if(err) throw err;

  var collection = db.collection('members');
  var index = function(req,res){
    collection.find().toArray(function(err,members){
      res.render('index', {members:members});
    });
  };


  var addMember = function(req,res){
    collection.insert(req.body,function(err, docs){
      console.log(docs);
      res.send(200);
    });
  };

  //list members
  app.get('/members', index);

  //add new members
  app.post('/members', addMember);


  app.listen(port);
  console.log("Server is listening on %s", port);


})

