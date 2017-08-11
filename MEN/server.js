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

app.listen(port);
console.log("Server is listening on %s", port);