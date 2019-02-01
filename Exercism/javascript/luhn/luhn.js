export class Luhn {
  constructor(num) {
    this.num = num;
    this.valid = this.validate();
  }

  validate() {
    if (this.num.length <= 1) return false;

    const stripped = this.num.replace(/\s/g, '');
    const doubled = Luhn.doubleEveryOtherDigitFromRight(stripped);
    let product = Luhn.getSumOfDigits(doubled);
    const toAdd = product > 9 ? -9 : 9;
    product += toAdd;

    return product % 10 === 0;
  }


  static doubleEveryOtherDigitFromRight(num) {
    return num
      .split('')
      .reverse()
      .map((digit, index) => ((index + 1) % 2 === 0 ? digit * 2 : digit))
      .reverse();
  }

  static getSumOfDigits(num) {
    return num
      .reduce((accumulator, current) => {
        let total = accumulator;
        total += Number(current);
        return total;
      }, 0);
  }
}
