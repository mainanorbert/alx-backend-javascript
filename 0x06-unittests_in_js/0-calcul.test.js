const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('add', () => {
  it('returns sum', () => {
    assert.equal(calculateNumber(1.4, 1.5), 3);
    assert.equal(calculateNumber(1, 1), 2);
  });

  it('sum for negatives', () => {
    assert.equal(calculateNumber(-1, -1), -2);
    assert.equal(calculateNumber(-1.4, -1.5), -2);
  });
  it('testing - and +', () => {
	  assert.equal(calculateNumber(-1, 1), 0)
	  assert.equal(calculateNumber(-1.5, 2), 1)
  })
});
