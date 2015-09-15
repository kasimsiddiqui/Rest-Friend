var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
require(__dirname + '/server_test');
var Router = require(__dirname + '/../lib/router');
var routes = require(__dirname + '/../lib/routes');


describe('the Routes Framework', function() {
  it('should return status 200', function(done) {
    chai.request('localhost:3000')
      .status200('./')
      .end(function (err, res) {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should return status 404', function(done) {
    chai.request('localhost:3000')
      .status404('./other')
      .end(function (err, res) {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
