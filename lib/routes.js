'use strict';

var http = require('http');
var router = require('./router');
var url = require('url');
var fs = require('fs');

// duplicating some functionality
exports.status200 = function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(jsonData));  // can't do this
  console.log('returned status 200');
  return res.end();
};

exports.error404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('Page not found.');
  console.log('returned status 404');
  return res.end();
};

exports.readWrite = function(req, data, res) {
  fs.open(req, function(err, data) {
    var fileName;
    fs.writeFile(data + fileName + '.json', req.body, function(err) {
      if (err) router.error404();
      });
  });
};

// we are repeating some things from router.js
// router doesn't have these methods
exports.getFunction = function(req, data, res) {
  if (req.method === 'GET') {
    fs.readFile(path, function(err, data){
      if(err){
        return err;
      } else {
        router.readWrite(route, callback);
        router.status200(jsonData);
      }
    });
  } else if (res.statusCode !== 200) {    // we repeat this; how can we replace it?
    router.error404();
  }
};

exports.postFunction = function(req, res) {
  if (req.method === 'POST') {
    req.on('data', function(data){
    jsonData = data.toString();
    });
  req.on('end', function(){
    router.readWrite(route, callback);
    router.status200(jsonData);
    });
    } else if (res.statusCode !== 200) {
      router.error404();
    }
};

exports.putFunction = function(req, res) {
  if (req.method === 'PUT') {
    req.on('data', function(data){
    jsonData = data.toString();
    });
    req.on('end', function(){
      router.readWrite(route, callback);
      router.status200();
    });
  } else if (res.statusCode !== 200) {
    router.error404();
  }
};

exports.patchFunction = function(req, res) {
  if (req.method === 'PATCH') {
    req.on('data', function(data){
      jsonData = JSON.parse(data.toString());
  });
  req.on('end', function(){
    router.readWrite(route, callback);
    router.status200(jsonData);
  });
  } else if (res.statusCode !== 200) {
    router.error404();
  }
};

exports.deleteFunction = function(req, res) {
  if (req.method === 'DELETE') {
    fs.unlink(route, callback);
};


