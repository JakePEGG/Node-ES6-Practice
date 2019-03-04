var expect = require('chai').expect
var assert = require('assert');


describe('refactoredFizzBuzz', function() {
    it('should return 1 for fizzbuzz of 1', function () {
        expect(refactoredFizzBuzz(1)).to.be.equal(1)
    });

    it('should return 2 for fizzbuzz of 2', function () {
        expect(refactoredFizzBuzz(2)).to.be.equal(2)
    });

    it('should return fizz % 3 == 0', function () {
        expect(refactoredFizzBuzz(3)).to.be.equal('fizz')
    });

    it('should return buzz % 5 == 0', function() {
      expect(refactoredFizzBuzz(5)).to.be.equal('buzz')
    });

    it('should return fizzbuzz for % 3 & % 5 == 0', function(){
      expect(refactoredFizzBuzz(15)).to.be.equal('fizzbuzz')
    });

    });
