'use strict';

var http = require('http');
var router = require('./router');
var url = require('url');
var fs = require('fs');


exports.status200 = function(jsonData) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(jsonData));
  console.log('returned status 200');
  return res.end();
};

exports.error404 = function() {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('Page not found.');
  res.end();
  console.log('returned status 404');
};

exports.readWrite = function() {
  fs.open(route, function(err, data) {
    var fileName;
    fs.writeFile(data + fileName + '.json', req.body, function(err) {
      if (err) error404();
      });
  });
};

exports.getFunction = function(req, res) {
  if (req.method === 'GET') {
    fs.readFile(path, function(err, data){
      if(err){
        error404();
      } else {
        readWrite(route, callback);
        status200(jsonData);
      }
    });
  } else if (res.statusCode !== 200) {
    error404();
  }
};

exports.postFunction = function(req, res) {
  if (req.method === 'POST') {
    req.on('data', function(data){
    jsonData = data.toString();
    });
  req.on('end', function(){
    readWrite(route, callback);
    status200(jsonData);
    });
    } else if (res.statusCode !== 200) {
      error404();
    }
};

exports.putFunction = function(req, res) {
  if (req.method === 'PUT') {
    req.on('data', function(data){
    jsonData = data.toString();
    });
    req.on('end', function(){
      readWrite(route, callback);
      status200(jsonData);
    });
  } else if (res.statusCode !== 200) {
    error404();
  }
};

exports.patchFunction = function(req, res) {
  if (req.method === 'PATCH') {
    req.on('data', function(data){
      jsonData = JSON.parse(data.toString());
  });
  req.on('end', function(){
    readWrite(route, callback);
    status200(jsonData);
  });
  } else if (res.statusCode !== 200) {
    error404();
  }
};

exports.deleteFunction = function(req, res) {
  if (req.method === 'DELETE') {
    fs.unlink(route, callback);
  } else if(res.statusCode !== 200) {
    error404();
  }
};

