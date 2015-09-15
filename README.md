# Rest-Friend
[![Build Status](https://travis-ci.org/kasimsiddiqui/Rest-Friend.svg)](https://travis-ci.org/kasimsiddiqui/Rest-Friend)

How to use the Rest Friend framework
=====================
Installation
-------------
```npm install --save rest-friend```

Features
-----------
 - allows the user to write a server easily with REST methods
	 - GET
	 - PUT
	 - PATCH
	 - POST
	 - DELETE
 - gives the user access to status200 and status400 methods for simple implementation of those methods

To create a server and use the framework
--------------------
```
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

```

Testing
-------

With the above server:
```
curl localhost:3000/
```
yields 'hello world'

and
```
curl localhost:3000/dontgohere
```
yields 'error404 page not found'
