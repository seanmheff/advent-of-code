var fs = require('fs');

var data = fs.readFileSync('./3.txt', 'utf8');
var currentPosition = { x: 0, y: 0 };
var houses = {  };
houses[`${currentPosition.x},${currentPosition.y}`] = 1;

for (var i=0; i<data.length; i++) {
  if (data[i] === '^') { currentPosition.y += 1; }
  else if (data[i] === 'v') { currentPosition.y -= 1; }
  else if (data[i] === '>') { currentPosition.x += 1; }
  else if (data[i] === '<') { currentPosition.x -= 1; }
  var newPosition = houses[`${currentPosition.x},${currentPosition.y}`];

  if (newPosition) {
    houses[`${currentPosition.x},${currentPosition.y}`] = (newPosition += 1);
  } else {
    houses[`${currentPosition.x},${currentPosition.y}`] = 1;
  }
}

console.log(Object.keys(houses).length);
