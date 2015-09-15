var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
require(__dirname + '/server_test');
var Router = require(__dirname + '/../lib/router');
var restFriend = require(__dirname + '/../lib/routes');
var router = Router();
var url = 'localhost:3000';


describe('the Routes Framework', function() {
  it('should return status 200', function(done) {
    chai.request(url)
      .get('/')
      .end(function (err, res) {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('hello world');
        done();
      });
  });

  it('should return status 404', function(done) {
    chai.request(url)
      .get('/dontgohere')
      .end(function (err, res) {
        expect(res.status).to.equal(404);
        console.log('this is throwing the error', err);
        done();
      });
  });
});
