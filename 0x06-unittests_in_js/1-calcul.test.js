const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('ADD', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.equal(calculateNumber('ADD', 1.4, 1.5), 3);
      assert.equal(calculateNumber('ADD', 1, 1), 2);
    });

    it('should return the sum of two rounded negative numbers', () => {
      assert.equal(calculateNumber('ADD', -1, -1), -2);
      assert.equal(calculateNumber('ADD', -1.4, -1.5), -2);
    });

    it('should return the sum of a negative and a positive number', () => {
      assert.equal(calculateNumber('ADD', -1, 1), 0);
      assert.equal(calculateNumber('ADD', -1.5, 2), 1);
    });

    it('should return the sum of two zeros', () => {
      assert.equal(calculateNumber('ADD', 0, 0), 0);
    });

    it('should return the sum of two large numbers', () => {
      assert.equal(calculateNumber('ADD', 10000, 20000), 30000);
      assert.equal(calculateNumber('ADD', 1.4538329, 9.3243842), 10);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 1), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.5, 1.3), 1);
    });

    it('should return the difference of two negative numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, -1), 0);
      assert.equal(calculateNumber('SUBTRACT', -1.1, -1.4), 0);
    });

    it('should return 0 when subtracting zeros', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('should return the difference of two large numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 9.323232, 3.432492432), 6);
      assert.equal(calculateNumber('SUBTRACT', 1000000, 100000), 900000);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 2, 1), 2);
      assert.equal(calculateNumber('DIVIDE', 1.5, 1.5), 1);
    });

    it('should return the division of two negative numbers', () => {
      assert.equal(calculateNumber('DIVIDE', -1, -1), 1);
      assert.equal(calculateNumber('DIVIDE', -4, -1.5), 4);
    });

    it('should return the division of a negative and a positive number', () => {
      assert.equal(calculateNumber('DIVIDE', -1, 1), -1);
      assert.equal(calculateNumber('DIVIDE', -4, 1.5), -2);
    });

    it('should return 0 when dividing by 0', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 1), 0);
      assert.equal(calculateNumber('DIVIDE', -4, 0), 'Error');
    });

    it('should return the division of two large numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 100000, 5000), 20);
      assert.equal(calculateNumber('DIVIDE', 3.64392432, 1.543242445), 2);
    });
  });
});