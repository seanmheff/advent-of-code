var fs = require('fs');

var data = fs.readFileSync('./2.txt', 'utf8');
var sum = 0;
var lines = data.split('\n');

lines.forEach(function(line) {
  var values = line.split('x');
  var intValues = values.map(Number);
  var l = intValues[0];
  var w = intValues[1];
  var h = intValues[2];

  // Need to find the smallest sides
  intValues.sort(function(a,b) { return a - b; });
  var side1 = intValues[0];
  var side2 = intValues[1];
  console.log(intValues)
  console.log('min', side1, side2)
  sum += (side1 + side1 + side2 + side2);
  sum += (l * w * h);
});

console.log('sum: ' + sum);
