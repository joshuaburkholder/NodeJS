var express = require('express'),
    app = express();

//define routes => specific [action] . . . [action]
// // eg, '/users/me' => looks up my user, renders profile view

//Define middleware from other packages
app.use()

//Create routes
app.get("/hello", function(req, res){
  res.send("hello world");
});

app.get("/goodbye", function(req, res){
  res.send("goodbye");
});

//Catch all other routes (and all other requests)
app.all("*", function(req, res){
  res.send(404);
});

app.listen(8080, function(){
  console.log("server is running on 8080")
});





