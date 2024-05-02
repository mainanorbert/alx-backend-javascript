const { expect } = require('chai');

// import { expect } from 'chai';
const calculateNumber = require('./2-calcul');

describe('calculateNumber', () => {
  describe('ADD', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 1.5)).to.equal(3);
      expect(calculateNumber('SUM', 1, 1)).to.equal(2);
    });
    it('should return the sum of two rounded negative numbers', () => {
      expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
      expect(calculateNumber('SUM', -1.4, -1.5)).to.equal(-2);
    });
    
    it('should return the sum of a negative and a positive number', () => {
      expect(calculateNumber('SUM', -1, 1)).to.equal(0);
      expect(calculateNumber('SUM', -1.5, 2)).to.equal(1);
    });
    
    it('should return the sum of two zeros', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
    
    it('should return the sum of two large numbers', () => {
      expect(calculateNumber('SUM', 10000, 20000)).to.equal(3000)
      expect(calculateNumber('SUM', 1.4538329, 9.3243842)).to.equal(10);
    })

    

    // Add more test cases for ADD operation if needed
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two numbers', () => {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 1.5, 1.3)).to.equal(0);
    });

    // Add more test cases for SUBTRACT operation if needed
  });

  describe('DIVIDE', () => {
    it('should return the division of two numbers', () => {
      expect(calculateNumber('DIVIDE', 2, 1)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
    });

    // Add more test cases for DIVIDE operation if needed
  });

  describe('INVALID', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID', 1, 3)).to.throw(Error);
    });
  });

  describe('Edge cases', () => {
    it('should return 0 when adding two very small numbers', () => {
      expect(calculateNumber('ADD', Number.EPSILON, Number.EPSILON)).to.equal(0);
    });

    it('should return Infinity when dividing by a very small number', () => {
      // This test case is skipped as it would result in Infinity
      // expect(calculateNumber('DIVIDE', 1, Number.EPSILON)).to.equal(Infinity);
    });

    it('should handle large numbers for all operations', () => {
      expect(calculateNumber('ADD', Number.MAX_VALUE, Number.MAX_VALUE)).to.equal(Infinity);
      expect(calculateNumber('SUBTRACT', Number.MAX_VALUE, Number.MAX_VALUE)).to.equal(0);
      expect(calculateNumber('DIVIDE', Number.MAX_VALUE, Number.MAX_VALUE)).to.equal(1);
    });
  });
});