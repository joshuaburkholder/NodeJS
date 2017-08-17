
var MongoClient = require('mongodb').MongoClient;

//Connect to Mongo
MongoClient.connect('mongodb://127.0.0.1:27017/', function(err, db){
  if(err) return console.log(err);
  console.log("Connected to Mongo");

//insert a doc into the collection
  var collection = db.collection('users');
  collection.insert({name:'Bob'}, function(err,docs){
    if(err) return console.log(err);
    console.log(docs);

//Query the COllection
    collection.find().toArray(function(err, users){
      if(err) return console.log(err);
      console.log(users);
    });
  });
});