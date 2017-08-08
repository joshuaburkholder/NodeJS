var path = require('path'),
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    mime = require('mime');

var server = http.createServer();

server.on('request', function(req, res){
    //404

    //500

    //200

  var urlParams = url.parse(req.url),
      //pathname: /index.html ==> index.html
      filename = path.join('.', urlParams.pathname)
});

server.listen(9000);