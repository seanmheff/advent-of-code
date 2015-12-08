var fs = require('fs');

var data = fs.readFileSync('./1.txt', 'utf8');
var story = 0;

for (var i=0; i<data.length; i++) {
  if (data[i] === '(') { story += 1; }
  else if (data[i] === ')') { story -= 1; }
}

console.log('floor: ' + story);
