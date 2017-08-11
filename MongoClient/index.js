//connect to mongo
//insert doc into collection
//query that collection

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/example', function(err, db){
  if(err) return console.log(err);
  console.log(db);
});