'use strict';

function RestFriend(r){
  this.resp = r
}

RestFriend.prototype.status200 = function(string) {
  this.resp.writeHead(200, {'Content-Type': 'text/plain'});
  this.resp.write(string);
  console.log('returned status 200');
  return this.resp.end();
};

RestFriend.prototype.error404 = function(string) {
  this.resp.writeHead(404, {'Content-Type': 'text/plain'});
  this.resp.write('Page not found.');
  console.log('returned status 404');
  return this.resp.end();
};

var framework = module.exports = exports = function(res){
  return new RestFriend(res);
};
