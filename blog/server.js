var express = require('express'),
    app = express(),
    articles = require('./controllers/articles'),
    bodyParser = require('body-parser');
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

app.use(bodyParser());

var notImplemented = function(req, res){
    res.send(501)
}

app.get('/articles', articles.index); //show all articles
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplemented);
app.post('/articles', articles.create); 
app.put('/articles/:articleId', notImplemented);
app.del('/articles/:articleId', notImplemented);

//comments on blog
app.post('articles/:articleId/comments', notImplemented);
app.delete('articles/:articleId/comments/:commentId', notImplemented);

app.listen(8080);
