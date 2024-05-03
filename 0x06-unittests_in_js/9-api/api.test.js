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
  it('correct status code for cart page', (done) =>{
    request.get('http://localhost:7865/cart/12', (e, res, body) =>{
      expect(res.statusCode).to.be.equal(200);
      done();
    })
  })
  it('testing for correct body response', (done) => {
    request.get('http://localhost:7865/cart/12', (e, res, body) =>{
      if (e){
        return done(e)
      }
      expect(body).to.be.equal('Payment methods for cart 12\n');
      done();
    });
  });
  it('testing for correct body response', (done) => {
    request.get('http://localhost:7865/cart/home', (e, res, body) =>{
      if (e) {
        return done(e)
      }
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});