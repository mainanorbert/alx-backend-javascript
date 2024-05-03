const request = require('request');
const { expect } = require('chai');

describe('Index page suite', () => {
  it('Correct GET/ Response', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('result for available route?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  
  it('Response for invalid route?', (done) => {
    request.get('http://localhost:7865/home', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Return 404 for invalid route', (done) => {
    request.get('http://localhost:7865/notfound', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});