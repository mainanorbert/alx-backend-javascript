const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  it('Correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Correct result when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.be.equal('Cannot GET /cart/hello');
      done();
    });
  });
});

describe('Login', ()=>{
  it('testing correct response for the post login method', (done) => {
    // const payload ={
    //   url: 'http://localhost:7865/login',
    //   method: 'POST',
    //   json: true,
    //   body: { userName: 'Nober' },
    // };
    request.post({url:'http://localhost:7865/login', json: {userName: 'Nober'}}, (e, res, body) =>{
      if (e) {
        return done(e)
      }
      expect(body).to.be.equal('Welcome Nober');
      done()
    })
  })
})

describe('Payment Methods', ()=>{
  it('Correct res', (done)=>{
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) return done(error)
      expect(body).to.be.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}')
    done()
    })
  })
})