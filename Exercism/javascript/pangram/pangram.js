export const isPangram = (sentence) => {
  const alphabetLength = 26;
  const uniqueChars = new Set();

  sentence.toLowerCase()
    .split('')
    .forEach((char) => {
      if (!uniqueChars.has(char) && char.match(/[a-z]/i)) {
        uniqueChars.add(char);
      }
    });

  return uniqueChars.size === alphabetLength;
};
