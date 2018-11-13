const between2and9 = number => number >= 2 && number <= 9;

const isValid = (number) => {
  const tenDigit = number.length === 10 && between2and9(number.charAt(0)) && between2and9(number.charAt(3));
  const elevenDigit = number.length === 11 && number.charAt(0) === '1' && between2and9(number.charAt(1)) && between2and9(number.charAt(4));
  return tenDigit || elevenDigit;
};

export class PhoneNumber {
  constructor(phone) {
    this.phone = phone;
  }

  number() {
    const formatted = this.phone.replace(/[^0-9]/gi, '');

    if (!isValid(formatted)) return null;

    return formatted.length === 11 ? formatted.slice(1) : formatted;
  }
}
