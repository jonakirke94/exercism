const map = [
  {
    verse: 1,
    animal: 'fly',
    phrase: '',
    swallow: '',
  },
  {
    verse: 2,
    animal: 'spider',
    phrase: 'It wriggled and jiggled and tickled inside her.\n',
    swallow: 'She swallowed the spider to catch the fly.',
  },
  {
    verse: 3,
    animal: 'bird',
    phrase: 'How absurd to swallow a bird!\n',
    swallow: 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.',
  },
  {
    verse: 4,
    animal: 'cat',
    phrase: 'Imagine that, to swallow a cat!\n',
    swallow: 'She swallowed the cat to catch the bird.',
  },
  {
    verse: 5,
    animal: 'dog',
    phrase: 'What a hog, to swallow a dog!\n',
    swallow: 'She swallowed the dog to catch the cat.',
  },
  {
    verse: 6,
    animal: 'goat',
    phrase: 'Just opened her throat and swallowed a goat!\n',
    swallow: 'She swallowed the goat to catch the dog.',
  },
  {
    verse: 7,
    animal: 'cow',
    phrase: "I don't know how she swallowed a cow!\n",
    swallow: 'She swallowed the cow to catch the goat.',
  },
];

const buildBody = (num, body) => {
  const verse = map.find(x => x.verse === num);
  if (num === 1) return body;
  body += `${verse.swallow}\n`;
  return buildBody(num - 1, body);
};

const buildVerse = (num) => {
  if (num === 8) {
    return "I know an old lady who swallowed a horse.\nShe's dead, of course!\n";
  }

  const curVerse = map.find(x => x.verse === num);
  const first = `I know an old lady who swallowed a ${curVerse.animal}.\n`;
  const phrase = curVerse.phrase;
  const body = buildBody(num, '');
  const last = "I don't know why she swallowed the fly. Perhaps she'll die.\n";

  return first + phrase + body + last;
};

const buildSong = (to, from, song) => {
  if (to - 1 === from) return song;
  song += `${buildVerse(to)}\n`;
  return buildSong(to + 1, from, song);
};

export class Song {
  verse(num) {
    return buildVerse(num);
  }

  verses(to, from) {
    return buildSong(to, from, '');
  }
}
