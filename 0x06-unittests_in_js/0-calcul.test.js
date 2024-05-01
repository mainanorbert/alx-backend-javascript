const assert = require('assert');
const { add } = require('./0-calcul');

describe('add', () => {
  it('returns sum', () => {
    assert.equal(add(1.4, 1.5), 3);
    assert.equal(add(1, 1), 2);
  });

  it('sum for negatives', () => {
    assert.equal(add(-1, -1), -2);
    assert.equal(add(-1.4, -1.5), -2);
  });
  it('testing - and +', () => {
	  assert.equal(add(-1, 1), 0)
	  assert.equal(add(-1.5, 2), 1)
  })
});
