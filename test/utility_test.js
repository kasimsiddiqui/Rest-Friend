var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
var server = require(__dirname + '/../lib/server');
var Router = require(__dirname + '/../lib/router');
var utility = require(__dirname + '/../lib/utility');


describe('the Utility Router', function() {
  it('should return status 200', function(done) {
    chai.request('localhost:3000')
      .status200('./')
      .end(function (err, res) {
        expect(err).to.be.equal(null);
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('should return status 404', function(done) {
    chai.request('localhost:3000')
      .status404('./other')
      .end(function (err, res) {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
  it('should complete a GET request', function(done) {
    chai.request('localhost:3000')
      .get('./')
      .end(function (err, res) {
        expect(err).to.be.equal(null);
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('should complete a POST request', function(done) {
      chai.request('localhost:3000')
        .post('./data')
        .end(function (err, res) {
          expect(err).to.be.equal(null);
          expect(res.status).to.be.equal(200);
          done();
        });
    });
  it('should complete a PUT request', function(done) {
    chai.request('localhost:3000')
      .put('./data')
      .end(function (err, res) {
        expect(err).to.be.equal(null);
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('should complete a PATCH request', function(done) {
    chai.request('localhost:3000')
      .patch('./data')
      .end(function (err, res) {
        expect(err).to.be.equal(null);
        expect(res.status).to.be.equal(200);
        done();
      });
  });
});
