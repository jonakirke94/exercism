const generateKey = () => {
  let key = '';
  for (let i = 0; i < 100; i++) {
    const code = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    key += String.fromCharCode(code);
  }
  return key;
};

const shift = (letter, index, key, determinator) => {
  // handle short key
  const charIndex = (index + key.length) % key.length;

  const distance = key[charIndex].charCodeAt() % 97;
  let code = determinator === 'ENCODE' ? letter.charCodeAt() + distance : letter.charCodeAt() - distance;

  // handle wraps
  code = code > 122 ? (code % 122) + 96 : code;
  code = code < 97 ? 123 - (97 % code) : code;

  return String.fromCharCode(code);
};

export class Cipher {
  constructor(key = generateKey()) {
		if (!/^[a-z]+$/.test(key)) throw new Error('Bad key')
		
		this.key = key;
  }

  encode(word) {
    return word
      .split('')
      .map((letter, index) => shift(letter, index, this.key, 'ENCODE'))
      .join('');
  }

  decode(word) {
    return word
      .split('')
      .map((letter, index) => shift(letter, index, this.key, 'DECODE'))
      .join('');
  }
}