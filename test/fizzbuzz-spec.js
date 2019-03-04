var expect = require('chai').expect
var assert = require('assert');


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

    it('should return buzz % 5 == 0', function() {
  expect(fizzbuzz(5)).to.be.equal('buzz')
  });

  it('should return fizzbuzz for % 3 & % 5 == 0', function(){
  expect(fizzbuzz(15)).to.be.equal('fizzbuzz')
  });

  });
