var express = require('express'),
    app = express();

//CRUD 

var notImplemented = function(req, res){
    res.send(501)
}

app.get('/articles', notImplemented); //show all articles
app.post('/articles', notImplemented); 
app.put('/article/:articleId'notImplemented);
app.del('/article/:articleId', notImplemented);


app.listen(8080);
