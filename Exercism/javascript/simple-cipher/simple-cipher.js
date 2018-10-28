const error = () => {
  throw new Error('Bad key');
};

const isValid = (key) => {
  const re = new RegExp('^[a-z]+$');
  return re.test(key);
};

const generateKey = () => {
  let key = '';
  for (let i = 0; i < 100; i++) {
    const code = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    key += String.fromCharCode(code);
  }
  return key;
};

const shift = (index, key, letter, determinator) => {
  // handle short key
  const charIdx = (index + key.length) % key.length;

  const distance = key[charIdx].charCodeAt() % 97;
  let code = determinator === 'ENCODE' ? letter.charCodeAt() + distance : letter.charCodeAt() - distance;

  // handle wraps
  code = code > 122 ? (code % 122) + 96 : code;
  code = code < 97 ? 123 - (97 % code) : code;

  return String.fromCharCode(code);
};

export class Cipher {
  constructor(key = generateKey()) {
    if (isValid(key)) {
      this.key = key;
    } else {
      return error();
    }
  }

  encode(word) {
    return word
      .split('')
      .map((x, idx) => shift(idx, this.key, x, 'ENCODE'))
      .join('');
  }

  decode(word) {
    return word
      .split('')
      .map((x, idx) => shift(idx, this.key, x, 'DECODE'))
      .join('');
  }
}
