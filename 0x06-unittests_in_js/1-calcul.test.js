const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('add', () => {
  it('returns sum', () => {
    assert.equal(calculateNumber(1.4, 1.5, 'ADD'), 3);
    assert.equal(calculateNumber(1, 1, 'ADD'), 2);
  });

  it('sum for negatives', () => {
    assert.equal(calculateNumber(-1, -1, 'ADD'), -2);
    assert.equal(calculateNumber(-1.4, -1.5, 'ADD'), -2);
  });
  it('testing - and +', () => {
	  assert.equal(calculateNumber(-1, 1, 'ADD'), 0)
	  assert.equal(calculateNumber(-1.5, 2, 'ADD'), 1)
  })
  it("testing zeros", () => {
	  assert.equal(calculateNumber(0, 0, 'ADD'), 0)
  })
  it("testing large numbers", () => {
	  assert.equal(calculateNumber(10000, 20000, 'ADD'), 30000)
	  assert.equal(calculateNumber(1.4538329, 9.3243842, 'ADD'), 10)
  })
});

describe('sub', () => {
  it('subtration of numbers', () => {
    assert.equal(calculateNumber(2, 1, 'SUBTRACT'), 1)
    assert.equal(calculateNumber(1.5, 1, 'SUBTRACT'), 1)
  })
  it('sub negatives', () => {
    assert.equal(calculateNumber(-1, -1, 'SUBTRACT'), 0)
    assert.equal(calculateNumber(-1.1, -1.4, 'SUBTRACT'), 0)
  })
})

describe('div', () => {
  it('subtration of numbers', () => {
    assert.equal(calculateNumber(2, 1, 'DIVIDE'), 2)
    assert.equal(calculateNumber(1.5, 1.5, 'DIVIDE'), 1)
  })
  it('sub negatives', () => {
    assert.equal(calculateNumber(-1, -1, 'DIVIDE'), 1)
    assert.equal(calculateNumber(-4, -1.5, 'DIVIDE'), 4)
  })
})

describe('mul', () => {
  it('subtration of numbers', () => {
    assert.equal(calculateNumber(2, 1, 'DIVIDE'), 2)
    assert.equal(calculateNumber(1.5, 1.5, 'DIVIDE'), 1)
  })
  it('sub negatives', () => {
    assert.equal(calculateNumber(-1, -1, 'DIVIDE'), 1)
    assert.equal(calculateNumber(-3, -1.5, 'DIVIDE'), 3)
  })
})
