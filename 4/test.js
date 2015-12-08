var assert = require('assert');
var Advent4 = require('./4.1');

describe('Advent4', function() {
  describe('#mine', function () {
    it('should return "609043" if the input is "abcdef"', function() {
      assert.equal('609043', Advent4.mine('abcdef'));
    });

    it('should return "1048970" if the input is "pqrstuv"', function() {
      assert.equal('1048970', Advent4.mine('pqrstuv'));
    });
  });

});
