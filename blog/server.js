var express = require('express'),
    app = express(),
    articles = require('./controllers/articles');

//CRUD 

/*
a post will look like this:
{
    title: "",
    body: "",
    author: "",
    comments: []
}
a comment will look like
{
    name:"",
    text:""
}
*/


var notImplemented = function(req, res){
    res.send(501)
}

app.get('/articles', notImplemented); //show all articles
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplemented);
app.post('/articles', notImplemented); 
app.put('/articles/:articleId'notImplemented);
app.del('/articles/:articleId', notImplemented);

//comments on blog
app.post('articles/:articleId/comments', notImplemented);
app.del('articles/:articleId/comments/:commentId', notImplemented);

app.listen(8080);
