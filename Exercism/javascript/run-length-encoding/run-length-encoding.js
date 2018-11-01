export const encode = (str) => {
  let counter = 1;
  let encoded = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      counter += 1;
    } else {
      const counterStr = counter > 1 ? counter : '';
      encoded += counterStr + str.charAt(i);
      counter = 1;
    }
  }

  return encoded;
};

const previousNum = (str, index) => {
  let multiplier = '';
  for (let j = index; j > 0; j -= 1) {
    const isNum = Number.isNaN(Number(str.charAt(j - 1)));
    if (!isNum && str.charAt(j - 1) !== ' ') {
      multiplier += str.charAt(j - 1);
    } else {
      break;
    }
  }

  return multiplier ? multiplier.split('').reverse().join('') : 1;
};

export const decode = (str) => {
  let decoded = '';
  for (let i = 0; i < str.length; i += 1) {
    const isNum = Number.isNaN(Number(str.charAt(i)));
    if (isNum || str.charAt(i) === ' ') {
      const count = previousNum(str, i);
      decoded += str.charAt(i).repeat(count);
    }
  }

  return decoded;
};
