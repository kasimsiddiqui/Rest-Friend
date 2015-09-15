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

To create a server 
--------------------
```
'use strict';

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res) {
});

server.listen(port, function() {
  console.log('Server is running on port ' + port);
});
```


