var lib = require('./5.1');
var fs = require('fs');

var data = fs.readFileSync('./5.txt', 'utf8').split('\n');
var count = 0;

data.forEach(function(input) {
  if (lib.isNice(input)) { count += 1; }
});

console.log('count:', count);
