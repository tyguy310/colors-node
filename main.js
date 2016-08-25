// const run = require('./run.js');
const colors = require('colors');

var songs = [
  { title: 'Imagine', artist: 'John Lennon', difficulty: 3 },
  { title: 'Hey, Soul Sister', artist: 'Train', difficulty: 5.3 },
  { title: 'Call Me Maybe', artist: 'Carly Rae Jepsen', difficulty: 2.5 },
  { title: 'Hotel California', artist: 'The Eagles', difficulty: 3.9 },
  { title: 'Blackbird', artist: 'The Beatles', difficulty: 2.8 },
  { title: 'Valerie', artist: 'Amy Winehouse', difficulty: 3.8 },
  { title: 'Say Something', artist: 'A Great Big World', difficulty: 4.3 },
  { title: 'Fix You', artist: 'Coldplay', difficulty: 2.2 },
  { title: 'Royals', artist: 'Lorde', difficulty: 4.3 }
];

const sorted = songs.sort((a, b) => {return a.difficulty - b.difficulty});

module.exports = {
  coloredList: sorted.map(colorify).forEach((song) => {return song})
};

function colorify (element, index) {
  if (element.difficulty < 3) {
    return colors.green(printString(element));
  }
  else if (element.difficulty < 4) {
    return colors.yellow(printString(element));
  }
  else {
    return colors.red(printString(element));
  }
}

function printString (element) {
  return element.title + ' by ' + element.artist + ' [' + element.difficulty + ']'
}
