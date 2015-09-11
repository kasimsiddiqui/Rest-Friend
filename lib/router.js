'use strict';

var fs = require('fs');
var bodyParser = require('body-parser');

var routes = {
  'GET': {},
  'POST': {},
  'PATCH': {},
  'PUT': {},
  'DELETE': {}
};

// Router constructor object
var Router = function(){

};

module.exports = exports = function() {
  return new Router();
};

//GET
Router.prototype.get = function(route, callback) {
  routes.GET[route] = callback;

  // fs.readFile(path, function(err, data) {
  //   if(err){
  //     error404();
  //   } else {
  //     res.writeHead(200, {'Content-Type': 'application/json'});
  //     res.write(data);
  //     res.end();
  //   }
  // });

};

//POST
Router.prototype.post = function(route, callback) {
  routes.POST[route] = callback;

    // req.on('data', function(data) {
    //   input = data.toString();
    // });

    // req.on('end', function() {
    //   fs.open(path, input, function(err) {
    //     if(err) {
    //       error404();
    //     } else {
    //       if(statusCode 200){
    //       fs.writeFile(path, input, function(err) {
    //         res.writeHead(200, {'Content-Type': 'application/json'});
    //         res.write(input);
    //         res.end();
    //       });
    //     } else{
    //       fs.writeFile(path, input, function(err) {
    //         error404();
    //       });
    //     }

    //     }
    //   });
    // });

};

//PATCH
Router.prototype.patch = function(route, callback) {
  routes.PATCH[route] = callback;

  // req.on('data', function(data) {
  //       input = JSON.parse(data.toString());
  // });

  // req.on('end', function() {
  //   fs.open(path, input, function(err) {
  //     if(err) {
  //       error404();
  //     } else {
  //       fs.readFile(path, function(err, data) {
  //         if(err) {
  //           error404();
  //         } else {
  //           file = JSON.parse(data.toString());
  //           for(var key in input) {
  //             file[key] = input[key];
  //           }
  //           file = JSON.stringify(file);
  //         }
  //         if(statusCode 200){
  //           fs.writeFile(path, file, function(err) {
  //             res.writeHead(200, {'Content-Type': 'application/json'});
  //             res.write(file);
  //             res.end();
  //           });
  //         } else {
  //           error404();
  //         }
  //       });
  //     }
  //   });
  // });

};

//PUT
Router.prototype.put = function(route, callback) {
  routes.PUT[route] = callback;

  // req.on('data', function(data) {
  //   input = data.toString();
  // });
  // req.on('end', function() {
  //   fs.writeFile(path, input, function(err) {
  //     if(statusCode = 200){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       res.write(input);
  //       res.end();
  //     } else{
  //       res.writeHead(404, {'Content-Type': 'text/plain'});
  //       res.write('404 not found');
  //       res.end();
  //     }
  //   });
  // });
};

//DELETE
Router.prototype.delete = function(route, callback) {
  routes.DELETE[route] = callback;

  // fs.unlink(fullPath, function(err) {
  //   if(statusCode 200){
  //     res.writeHead(200, {'Content-Type': 'text/plain'});
  //     res.end();
  //   } else{
  //     error404();
  //   }
  // });


};

//Handle the Route
Router.prototype.route = function(req, res) {
  if (typeof routes[req.method][req.url] === 'function')
    routes[req.method][req.url](req, res);
};

function error404(){
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('not found 404');
  res.end();
}
