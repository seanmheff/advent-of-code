var assert = require('assert');
var Advent5 = require('./5.1');

describe('Advent5', function() {
  describe('#containsThreeVowels', function () {
    it('should pass "aei"', function() {
      assert(Advent5.containsThreeVowels('aei'));
    });

    it('should pass "xazegov"', function() {
      assert(Advent5.containsThreeVowels('xazegov'));
    });

    it('should pass "aeiouaeiouaeiou"', function() {
      assert(Advent5.containsThreeVowels('aeiouaeiouaeiou'));
    });
  });

  describe('#containsDoubleLetter', function () {
    it('should pass "xx"', function() {
      assert(Advent5.containsDoubleLetter('xx'));
    });

    it('should pass "abcdde"', function() {
      assert(Advent5.containsDoubleLetter('abcdde'));
    });

    it('should pass "aabbccdd"', function() {
      assert(Advent5.containsDoubleLetter('aabbccdd'));
    });
  });

  describe('#doesNotContainStrings', function () {
    it('should fail if string contains "ab"', function() {
      assert(!Advent5.doesNotContainStrings('ab'));
    });

    it('should fail if string contains "cd"', function() {
      assert(!Advent5.doesNotContainStrings('cd'));
    });

    it('should fail if string contains "pq"', function() {
      assert(!Advent5.doesNotContainStrings('pq'));
    });

    it('should fail if string contains "xy"', function() {
      assert(!Advent5.doesNotContainStrings('xy'));
    });
  });

  describe('functional tests', function() {
    it('should classify "ugknbfddgicrmopn" as "nice"', function() {
      assert(Advent5.isNice('ugknbfddgicrmopn'));
    });
  
    it('should classify "aaa" as "nice"', function() {
      assert(Advent5.isNice('aaa'));
    });
  
    it('should classify "jchzalrnumimnmhp" as "naughty"', function() {
      assert(!Advent5.isNice('jchzalrnumimnmhp'));
    });
  
    it('should classify "haegwjzuvuyypxyu" as "naughty"', function() {
      assert(!Advent5.isNice('haegwjzuvuyypxyu'));
    });
  
    it('should classify "dvszwmarrgswjxmb" as "naughty"', function() {
      assert(!Advent5.isNice('dvszwmarrgswjxmb'));
    });
  });
});
