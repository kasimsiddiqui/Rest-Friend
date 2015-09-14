'use strict';

var utility = require('./utility');
var routes = {
  'GET': {},
  'POST': {},
  'PATCH': {},
  'PUT': {},
  'DELETE': {}
};

router.getFunction(req, res);
router.postFunction(req, res);
router.putFunction(req, res);
router.patchFunction(req, res);
router.deleteFunction(req, res);

var Router = function(){

};

module.exports = exports = function() {
  return new Router();
};

Router.prototype.get = function(route, callback) {
  routes.GET[route] = callback;
};

Router.prototype.post = function(route, callback) {
  routes.POST[route] = callback;
};

Router.prototype.patch = function(route, callback) {
  routes.PATCH[route] = callback;
};

Router.prototype.put = function(route, callback) {
  routes.PUT[route] = callback;
};

Router.prototype.delete = function(route, callback) {
  routes.DELETE[route] = callback;
};

Router.prototype.route = function(req, res) {
  if (typeof routes[req.method][req.url] === 'function')
    routes[req.method][req.url](req, res);
};
