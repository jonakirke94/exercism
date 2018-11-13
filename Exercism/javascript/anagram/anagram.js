const sortWord = word => word.toLowerCase().split('').sort().join('');

const isAnagram = (sortedWord, word) => element => sortWord(element) === sortedWord && word.toLowerCase() !== element.toLowerCase();

export class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(arr) {
    const sortedWord = sortWord(this.word);
    return arr.filter(isAnagram(sortedWord, this.word));
  }
}
