var md5 = require('md5');

module.exports = {

  mine: function(input) {
    var number = 0;
    while (md5(input+number).substr(0,5) !== '00000') {
      number += 1; 
    }
    return number;
  }

};
