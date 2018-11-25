const VERSE_MAP = [
  ['lay in', 'the house that Jack built.'],
  ['ate', 'the malt'],
  ['killed', 'the rat'],
  ['worried', 'the cat'],
  ['tossed', 'the dog'],
  ['milked', 'the cow with the crumpled horn'],
  ['kissed', 'the maiden all forlorn'],
  ['married', 'the man all tattered and torn'],
  ['woke', 'the priest all shaven and shorn'],
  ['kept', 'the rooster that crowed in the morn'],
  ['belonged to', 'the farmer sowing his corn'],
  ['', 'the horse and the hound and the horn'],
];

const PREFIX = 'that ';
const PREFIX_FIRST = 'This is ';

export class House {
  static verse(n, arr = []) {
    const line = arr.length === 0 ? `${PREFIX_FIRST}${VERSE_MAP[n - 1][1]}` : `${PREFIX}${VERSE_MAP[n - 1][0]} ${VERSE_MAP[n - 1][1]}`;
    arr.push(line);
    if (n === 1) return arr;
    return this.verse(n - 1, arr);
  }

  static verses(from, to, arr = []) {
    const verse = this.verse(from);
    const verses = arr.concat(verse, '');
    // slice to remove trailing '';
    if (from === to) return verses.slice(0, -1);
    return this.verses(from + 1, to, verses);
  }
}
