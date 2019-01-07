export const primeFactors = (num) => {
  const factors = [];
  let divisor = 2;
  let cardinal = num;
  while (cardinal > 1) {
    if (cardinal % divisor === 0) {
      factors.push(divisor);
      cardinal /= divisor;
      divisor = 2;
    } else {
      divisor += 1;
    }
  }
  return factors;
};
