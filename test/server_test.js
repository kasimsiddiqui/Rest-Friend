'use strict';

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res) {
});

server.listen(port, function() {
  console.log('Server is running on port ' + port);
});
