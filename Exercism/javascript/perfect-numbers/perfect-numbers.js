const getAliquot = (num) => {
  let sum = 0;
  for (let index = 1; index < num; index += 1) {
    if (num % index === 0) {
      sum += index;
    }
  }

  return sum;
};

export const classify = (num) => {
  if (num <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const sum = getAliquot(num);

  if (sum === num) {
    return 'perfect';
  }

  if (sum > num) {
    return 'abundant';
  }

  if (sum < num) {
    return 'deficient';
  }
};
