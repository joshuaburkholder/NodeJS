var express = require('express'),
    app = express();

//CRUD 

/*
a post will look like this:
{
    title: "",
    body: "",
    author: "",
    comments: []
}
*/


var notImplemented = function(req, res){
    res.send(501)
}

app.get('/articles', notImplemented); //show all articles
app.get('/articles/:articleId', notImplemented);
app.get('/articles/new', notImplemented);
app.post('/articles', notImplemented); 
app.put('/articles/:articleId'notImplemented);
app.del('/articles/:articleId', notImplemented);

//comments on blog
app.post('articles/:articleId/comments', notImplemented);
app.del('articles/:articleId/comments/:commentId', notImplemented);

app.listen(8080);
