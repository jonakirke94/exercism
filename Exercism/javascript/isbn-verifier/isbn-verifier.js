const normalized = num => num.replace(/-/g, '').replace('X', 10);

const isTooLong = num => num.slice(num.length - 2) !== '10' && num.length > 10;

export class ISBN {
  constructor(number) {
    this.number = normalized(number);
  }

  isValid() {
    if (isTooLong(this.number)) return false;

    const sum = this.number
      .match(/10|[0-9]/g)
      .reverse()
      .reduce((acc, cur, index) => acc + Number(cur) * (index + 1), 0);

    return sum % 11 === 0;
  }
}
