const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
const badStrings = [ 'ab', 'cd', 'pq', 'xy' ];

module.exports = {

  containsThreeVowels: function(input) {
    var count = 0;
    for (var i=0; i<input.length; i++) {
      if (vowels.indexOf(input[i]) > -1) { count += 1; }
    }
    return count >= 3;
  },

  containsDoubleLetter: function(input) {
    var lastLetter = '';
    for (var i=0; i<input.length; i++) {
      if (input[i] === lastLetter) { return true; }
      lastLetter = input[i];
    }
    return false;
  },

  doesNotContainStrings: function(input) {
    for (var i=0; i<badStrings.length; i++) {
      if (input.indexOf(badStrings[i]) > -1) { return false; }
    }
    return true;
  },

  isNice: function(input) {
    return this.containsThreeVowels(input) && 
        this.containsDoubleLetter(input) && 
        this.doesNotContainStrings(input);
  }

};
