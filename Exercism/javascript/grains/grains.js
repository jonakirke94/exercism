/* eslint-disable class-methods-use-this */
import BigInt from './lib/big-integer';

export class Grains {
  square(value) {
    return BigInt(2)
      .pow(value - 1)
      .toString();
  }

  total() {
    const res = BigInt(2).pow(64);
    return res.subtract(1)
      .toString();
  }
}
