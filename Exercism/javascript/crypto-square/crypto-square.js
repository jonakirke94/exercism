export class Crypto {
  constructor(text) {
    this.text = text;
  }

  normalizePlaintext() {
    return this.text.toLowerCase().replace(/[^a-z|0-9]/g, '');
  }

  size() {
    const normalized = this.normalizePlaintext();
    return Math.ceil(Math.sqrt(normalized.length));
  }

  plaintextSegments() {
    const normalized = this.normalizePlaintext();
    const size = this.size();

    return normalized.match(new RegExp(`.{1,${size}}`, 'g'));
  }

  ciphertext() {
    const plain = this.plaintextSegments();

    let ciphered = '';
    let i = 0;
    do {
      ciphered += this.buildCipher(plain, i);
      i += 1;
    } while (i < this.size());

    return ciphered;
  }

  // eslint-disable-next-line class-methods-use-this
  buildCipher(plain, index) {
    let ciphered = '';
    plain.forEach((word) => {
      if (word[index] !== undefined) {
        ciphered += word[index];
      }
    });
    return ciphered;
  }
}
