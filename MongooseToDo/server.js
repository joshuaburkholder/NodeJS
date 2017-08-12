var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan');
    // todoController = require('./controllers/todo');

mongoose.connect('mongodb://localhost/mgoosetodo')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

app.set('view engine', 'ejs');

// routes

// app.get();
// app.post();
// app.put();
// app.delete();

app.listen(8080, function(){           
  console.log("Server is listening on 8080");  
});
