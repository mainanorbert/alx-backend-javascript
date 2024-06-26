const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');


describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('returns the sum of rounded numbers, up & down', () => {
            expect(calculateNumber('SUM', 2.4, 1.5)).to.equal(4);
        });

        it('return the sum of rounded numbers, both up', () => {
            expect(calculateNumber('SUM', 1.543, 4.5)).to.equal(7);
        });

        it('return the sum of zero and positive number', () => {
            expect(calculateNumber('SUM', 0, 4.6)).to.equal(5);
        });

        it('should return the sum of zero and negative number', () => {
            expect(calculateNumber('SUM', 0, -4.5)).to.equal(-4);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the subtraction result of rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return the subtraction result of rounded numbers, both up', () => {
            expect(calculateNumber('SUBTRACT', 1.54, 4.5)).to.equal(-3);
        });

        it('should return the subtraction result of zero and positive number', () => {
            expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5);
        });

        it('should return the subtraction result of zero and negative number', () => {
            expect(calculateNumber('SUBTRACT', 0, -4.5)).to.equal(4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the division result of rounded numbers when divisor is not zero', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('returns "Error" when divisor is zero', () => {
            expect(calculateNumber('DIVIDE', 1.3, 0)).to.equal('Error');
        });

        it('should return the division result of negative numbers when divisor is not zero', () => {
            expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
        });

        it('should return the division result of zero and positive number when divisor is not zero', () => {
            expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
        });

        it('returns the division result of zero and negative number when divisor is not zero', () => {
            expect(calculateNumber('DIVIDE', 0, -6.5)).to.equal(-0);
        });
    });
});