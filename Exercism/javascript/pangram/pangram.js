export const isPangram = (sentence) => {
  const alphabetLength = 26;
  const filtered = sentence.toLowerCase().match(/[a-z]/g);
  return new Set(filtered).size >= alphabetLength;
};