const getCluster = (word) => {
  const vowels = word.match(/[aeiou]/g);
  const hasQuSound = vowels[0] === 'u' && word[word.indexOf(vowels[0]) - 1] === 'q';
  const index = hasQuSound ? word.indexOf(vowels[1]) : word.indexOf(vowels[0]);
  return word.slice(0, index);
};

const translateWord = (word) => {
  const cluster = getCluster(word);
  return `${word.slice(cluster.length) + cluster}ay`;
};

export default class Translator {
  static translate(word) {
    return word
      .split(' ')
      .map(w => translateWord(w))
      .join(' ');
  }
}
