'use strict';

var http = require('http');
var port = 3000;
var Router = require(__dirname + '/../lib/router');
var restFriend = require(__dirname + '/../lib/routes');

var router = Router();

router.get('/', function(req, res){
    restFriend(res).status200('hello world');
});

router.get('/dontgohere', function(req, res){
    restFriend(res).error404('error404 page not found');
});

var server = http.createServer(router.route);

server.listen(port, function() {
  console.log('Server is running on port ' + port);
});
