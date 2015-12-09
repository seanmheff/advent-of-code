'use strict';

// Define any constants we need
const VOWELS = [ 'a', 'e', 'i', 'o', 'u' ];
const BAD_STRINGS = [ 'ab', 'cd', 'pq', 'xy' ];

module.exports = {

  containsThreeVowels: function(input) {
    let count = 0;
    for (let i=0; i<input.length; i++) {
      if (VOWELS.indexOf(input[i]) > -1) { count += 1; }
    }
    return count >= 3;
  },

  containsDoubleLetter: function(input) {
    let lastLetter = '';
    for (let i=0; i<input.length; i++) {
      if (input[i] === lastLetter) { return true; }
      lastLetter = input[i];
    }
    return false;
  },

  doesNotContainStrings: function(input) {
    for (let i=0; i<BAD_STRINGS.length; i++) {
      if (input.indexOf(BAD_STRINGS[i]) > -1) { return false; }
    }
    return true;
  },

  isNice: function(input) {
    return this.containsThreeVowels(input) && 
        this.containsDoubleLetter(input) && 
        this.doesNotContainStrings(input);
  }

};
