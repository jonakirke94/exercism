const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return num !== 1 && num !== 0;
};

const isValid = n => (n > 0 && n <= 23) && isPrime(n);

export class DiffieHellman {
  constructor(p, g) {
    if (!isValid(p) || !isValid(g)) throw new Error();
    this.p = p;
    this.g = g;
  }

  getPublicKeyFromPrivateKey(key) {
    if (key < 2 || key >= this.p) throw new Error();
    return (this.g ** key) % this.p;
  }

  getSharedSecret(privateKey, publicKey) {
    return (publicKey ** privateKey) % this.p;
  }
}
