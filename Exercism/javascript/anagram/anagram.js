const sortWord = word => word.toLowerCase().split('').sort().join('');

const isAnagram = (sortedWord, word) => (element) => {
  const isIdentical = word.toLowerCase() === element.toLowerCase();
  return sortWord(element) === sortedWord && !isIdentical;
};

export class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(arr) {
    const sortedWord = sortWord(this.word);
    return arr.filter(isAnagram(sortedWord, this.word));
  }
}
