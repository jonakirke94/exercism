const validBase = base => !(!base || base < 2 || !Number.isInteger(base));

const validNumbers = (numbers, from) => {
  const leadingZeros = numbers.length > 1 && numbers[0] === 0;
  const invalidNums = numbers.length === 0 || numbers.filter(n => n < 0 || n >= from).length;
  return !leadingZeros && !invalidNums;
};

export class Converter {
  // eslint-disable-next-line class-methods-use-this
  convert(numbers, from, to) {
    if (!validBase(from)) {
      throw new Error('Wrong input base');
    }

    if (!validBase(to)) {
      throw new Error('Wrong output base');
    }

    if (!validNumbers(numbers, from)) {
      throw new Error('Input has wrong format');
    }

    let convNum = numbers.reduce((pre, cur) => pre * from + cur, 0);
    const res = [];
    do {
      res.push(convNum % to);
      convNum = Math.floor(convNum / to);
    } while (convNum > 0);
    return res.reverse();
  }
}
