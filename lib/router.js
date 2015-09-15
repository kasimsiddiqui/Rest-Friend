'use strict';

var routes = require('./routes');
var crudRoute = {
  'GET': {},
  'POST': {},
  'PATCH': {},
  'PUT': {},
  'DELETE': {}
};

var Router = function(){

};

module.exports = exports = function() {
  return new Router();
};

Router.prototype.get = function(route, callback) {
  crudRoute.GET[route] = callback;
};

Router.prototype.post = function(route, callback) {
  crudRoute.POST[route] = callback;
};

Router.prototype.patch = function(route, callback) {
  crudRoute.PATCH[route] = callback;
};

Router.prototype.put = function(route, callback) {
  crudRoute.PUT[route] = callback;
};

Router.prototype.delete = function(route, callback) {
  crudRoute.DELETE[route] = callback;
};

Router.prototype.route = function(req, res) {
  if (typeof crudRoute[req.method][req.url] === 'function')
    crudRoute[req.method][req.url](req, res);
};
