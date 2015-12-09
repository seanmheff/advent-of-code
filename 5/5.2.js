'use strict';

module.exports = {

  containsPair: function(input) {
    let pairs = 0;
    for (let i=1; i<input.length; i++) {
      let pair = input.substring(i-1, i+1);
      for (let j=1; j<i-1; j++) {
        let tmpPair = input.substring(j-1, j+1);
        if (pair === tmpPair) {
          pairs += 1; break;
        }
      }
    }
    return pairs >= 1;
  },

  hasRepeatingLetter: function(input) {
    for (let i=2; i<input.length; i++) {
      if (input[i] === input[i-2]) { return true; }
    } 
    return false;
  },

  isNice: function(input) {
    return this.containsPair(input) && this.hasRepeatingLetter(input);
  }

};
