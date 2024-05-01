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
  it("testing zeros", () => {
	  assert.equal(calculateNumber(0, 0), 0)
  })
  it("testing large numbers", () => {
	  assert.equal(calculateNumber(10000, 20000), 30000)
	  assert.equal(calculateNumber(1.4538329, 9.3243842), 10)
  })
});
