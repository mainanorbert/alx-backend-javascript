const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  let server;

  before(() => {
    server = require('./api');
  });

  after(() => {
    server.close();
  });

  it('should return status 200', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system"', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
