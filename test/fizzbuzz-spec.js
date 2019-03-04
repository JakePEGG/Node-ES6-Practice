var expect = require('chai').expect


describe('fizzbuzz', function() {
    it('should return 1 for fizzbuzz of 1', function () {
        expect(fizzbuzz(1)).to.be.equal(1)
    });

    it('should return 2 for fizzbuzz of 2', function () {
        expect(fizzbuzz(2)).to.be.equal(2)
    });

    it('should return fizz % 3 == 0', function () {
        expect(fizzbuzz(3)).to.be.equal('fizz')
    });
