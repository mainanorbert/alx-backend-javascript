const { expect } = require('chai');
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
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 1), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.5, 1.3), 1);
    });

    it('should return the difference of two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1, -1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1.1, -1.4)).to.equal(0);
    });
    
    it('should return 0 when subtracting zeros', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
    
    it('should return the difference of two large numbers', () => {
      expect(calculateNumber('SUBTRACT', 9.323232, 3.432492432)).to.equal(6);
      expect(calculateNumber('SUBTRACT', -9.323232, -3.432492432)).to.equal(-6);
      expect(calculateNumber('SUBTRACT', 1000000, 100000)).to.equal(900000);
    });
    
  });
  describe('DIVIDE', () => {
    it('should return the division of two numbers', () => {
      expect(calculateNumber('DIVIDE', 2, 1)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
      expect(calculateNumber('DIVIDE', -4, -1.5)).to.equal(4);
      expect(calculateNumber('DIVIDE', 1.6, 1.2)).to.equal(2);
    });
    
    it('should return the division of two negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1, -1)).to.equal(1);
      expect(calculateNumber('DIVIDE', -4, -1.5)).to.equal(4);
      expect(calculateNumber('DIVIDE', -2.3, -1.5)).to.equal(2);
    });
    
    it('should return the division of a negative and a positive number', () => {
      expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
      expect(calculateNumber('DIVIDE', -4, 1.5)).to.equal(-2);
      expect(calculateNumber('DIVIDE', 4.3, 1.5)).to.equal(2);
    });
    
    it('should return 0 when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
      expect(calculateNumber('DIVIDE', -4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
    
    it('should return the division of two large numbers', () => {
      expect(calculateNumber('DIVIDE', 100000, 5000)).to.equal(20);
      expect(calculateNumber('DIVIDE', 3.64392432, 1.543242445)).to.equal(2);
      expect(calculateNumber('DIVIDE', -3.64392432, -1.543242445)).to.equal(2);
    });    
  });

  describe('INVALID', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID', 1, 3)).to.throw(Error);
    });
  });
});