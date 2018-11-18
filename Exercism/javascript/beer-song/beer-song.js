const finalVerse = () => 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

const bottlesLeft = (num) => {
  if (num === 1) {
    return 'Take it down and pass it around, no more bottles of beer on the wall.\n';
  }
  if (num === 2) {
    return 'Take one down and pass it around, 1 bottle of beer on the wall.\n';
  }

  return `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
};

const bottlesOnWall = num => (num > 1 ? `${num} bottles of beer on the wall, ${num} bottles of beer.\n` : '1 bottle of beer on the wall, 1 bottle of beer.\n');

const getChorus = num => bottlesOnWall(num) + bottlesLeft(num);

export class Beer {
  static verse(num) {
    if (num === 0) {
      return finalVerse();
    }

    return getChorus(num);
  }

  static sing(from = 99, to = 1) {
    let song = '';
    for (let i = from; i >= to; i -= 1) {
			song += getChorus(i);
			song += '\n';

      if (i === 1) {
        song += finalVerse();
      }
    }

    return song;
  }
}
