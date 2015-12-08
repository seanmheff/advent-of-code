var fs = require('fs');

var data = fs.readFileSync('./3.txt', 'utf8');
var santaCurrentPosition = { x: 0, y: 0 };
var roboSantaCurrentPosition = { x: 0, y: 0 };
var houses = {  };
houses[`0,0`] = 1;

for (var i=0; i<data.length; i++) {
  if (i % 2 === 0) {
    if (data[i] === '^') { santaCurrentPosition.y += 1; }
    else if (data[i] === 'v') { santaCurrentPosition.y -= 1; }
    else if (data[i] === '>') { santaCurrentPosition.x += 1; }
    else if (data[i] === '<') { santaCurrentPosition.x -= 1; }
    var newPosition = houses[`${santaCurrentPosition.x},${santaCurrentPosition.y}`];

    if (newPosition) {
      houses[`${santaCurrentPosition.x},${santaCurrentPosition.y}`] = (newPosition += 1);
    } else {
      houses[`${santaCurrentPosition.x},${santaCurrentPosition.y}`] = 1;
    }
  } else {
    if (data[i] === '^') { roboSantaCurrentPosition.y += 1; }
    else if (data[i] === 'v') { roboSantaCurrentPosition.y -= 1; }
    else if (data[i] === '>') { roboSantaCurrentPosition.x += 1; }
    else if (data[i] === '<') { roboSantaCurrentPosition.x -= 1; }
    var newPosition = houses[`${roboSantaCurrentPosition.x},${roboSantaCurrentPosition.y}`];

    if (newPosition) {
      houses[`${roboSantaCurrentPosition.x},${roboSantaCurrentPosition.y}`] = (newPosition += 1);
    } else {
      houses[`${roboSantaCurrentPosition.x},${roboSantaCurrentPosition.y}`] = 1;
    }
  }
}

console.log(Object.keys(houses).length);
