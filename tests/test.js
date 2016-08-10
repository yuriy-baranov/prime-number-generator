var chai = require('chai');
var isPrime = require('../server/index').isPrime;
var assert = chai.assert;

describe('Prime checker', () => {
    it('test 0', () => {
        chai.assert.equal(isPrime(1), true);
    });
    it('test 1', () => {
        chai.assert.equal(isPrime(2), true);
    });
    it('test 2', () => {
        chai.assert.equal(isPrime(3), true);
    });
    it('test 3', () => {
        chai.assert.equal(isPrime(4), false);
    });
    it('test 4', () => {
        chai.assert.equal(isPrime(5), true);
    });
    it('test 5', () => {
        chai.assert.equal(isPrime(6), false);
    });
    it('test 6', () => {
        chai.assert.equal(isPrime(100), false);
    });
    it('test 7', () => {
        chai.assert.equal(isPrime(20), false);
    });
    it('test 8', () => {
        chai.assert.equal(isPrime(97), true);
    });
    it('test 9', () => {
        chai.assert.equal(isPrime("abc"), null);
    });
    it('test 10', () => {
        chai.assert.equal(isPrime("1.23"), null);
    });
});