'use strict';

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
};

//POST
Router.prototype.post = function(route, callback) {
  routes.POST[route] = callback;
};

//PATCH
Router.prototype.patch = function(route, callback) {
  routes.PATCH[route] = callback;
};

//PUT
Router.prototype.put = function(route, callback) {
  routes.PUT[route] = callback;
};

//DELETE
Router.prototype.delete = function(route, callback) {
  routes.DELETE[route] = callback;
};

//Handle the Route
Router.prototype.route = function(req, res) {
  if (typeof routes[req.method][req.url] === 'function')
    routes[req.method][req.url](req, res);
};
