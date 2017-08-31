var express = require("express");

var app = express();
var port = 3700;

app.get("/", function(req, res){
	res.send("tada!");
});

app.listen(port);
console.log("listening on port " + port);