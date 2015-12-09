var assert = require('assert');
var Advent5_1 = require('./5.1');
var Advent5_2 = require('./5.2');

describe('Advent5_1', function() {
  describe('#containsThreeVowels', function () {
    it('should pass "aei"', function() {
      assert(Advent5_1.containsThreeVowels('aei'));
    });

    it('should pass "xazegov"', function() {
      assert(Advent5_1.containsThreeVowels('xazegov'));
    });

    it('should pass "aeiouaeiouaeiou"', function() {
      assert(Advent5_1.containsThreeVowels('aeiouaeiouaeiou'));
    });
  });

  describe('#containsDoubleLetter', function () {
    it('should pass "xx"', function() {
      assert(Advent5_1.containsDoubleLetter('xx'));
    });

    it('should pass "abcdde"', function() {
      assert(Advent5_1.containsDoubleLetter('abcdde'));
    });

    it('should pass "aabbccdd"', function() {
      assert(Advent5_1.containsDoubleLetter('aabbccdd'));
    });
  });

  describe('#doesNotContainStrings', function () {
    it('should fail if string contains "ab"', function() {
      assert(!Advent5_1.doesNotContainStrings('ab'));
    });

    it('should fail if string contains "cd"', function() {
      assert(!Advent5_1.doesNotContainStrings('cd'));
    });

    it('should fail if string contains "pq"', function() {
      assert(!Advent5_1.doesNotContainStrings('pq'));
    });

    it('should fail if string contains "xy"', function() {
      assert(!Advent5_1.doesNotContainStrings('xy'));
    });
  });

  describe('functional tests', function() {
    it('should classify "ugknbfddgicrmopn" as "nice"', function() {
      assert(Advent5_1.isNice('ugknbfddgicrmopn'));
    });
  
    it('should classify "aaa" as "nice"', function() {
      assert(Advent5_1.isNice('aaa'));
    });
  
    it('should classify "jchzalrnumimnmhp" as "naughty"', function() {
      assert(!Advent5_1.isNice('jchzalrnumimnmhp'));
    });
  
    it('should classify "haegwjzuvuyypxyu" as "naughty"', function() {
      assert(!Advent5_1.isNice('haegwjzuvuyypxyu'));
    });
  
    it('should classify "dvszwmarrgswjxmb" as "naughty"', function() {
      assert(!Advent5_1.isNice('dvszwmarrgswjxmb'));
    });
  });
});

describe('Advent5_2', function() {
  describe('#containsPair', function () {
    it('should pass "xyxy"', function() {
      assert(Advent5_2.containsPair('xyxy'));
    });

    it('should pass "aabcdefgaa"', function() {
      assert(Advent5_2.containsPair('aabcdefgaa'));
    });

    it('should not pass "aaa"', function() {
      assert(!Advent5_2.containsPair('aaa'));
    });
  });

  describe('#hasRepeatingLetter', function () {
    it('should pass "xyx"', function() {
      assert(Advent5_2.hasRepeatingLetter('xyx'));
    });

    it('should pass "abcdefeghi"', function() {
      assert(Advent5_2.hasRepeatingLetter('abcdefeghi'));
    });

    it('should pass "aaa"', function() {
      assert(Advent5_2.hasRepeatingLetter('aaa'));
    });
  });

  describe('functional tests', function () {
    it('should classify "qjhvhtzxzqqjkmpb" as "nice"', function() {
      assert(Advent5_2.isNice('qjhvhtzxzqqjkmpb'));
    });

    it('should classify "xxyxx" as "nice"', function() {
      assert(Advent5_2.isNice('xxyxx'));
    });

    it('should classify "uurcxstgmygtbstg" as "naughty"', function() {
      assert(!Advent5_2.isNice('uurcxstgmygtbstg'));
    });

    it('should classify "ieodomkazucvgmuy" as "naughty"', function() {
      assert(!Advent5_2.isNice('ieodomkazucvgmuy'));
    });
  });
});
