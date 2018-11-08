const toLower = sentence => sentence.split('').map(x => x.toLowerCase()).join('');

export const isPangram = (sentence) => {
  const uniqueChars = [];

  toLower(sentence)
    .split('')
    .forEach((char) => {
      if (!uniqueChars.includes(char) && char.match(/[a-z]/i)) {
        uniqueChars.push(char);
      }
    });

  return uniqueChars.length === 26;
};
