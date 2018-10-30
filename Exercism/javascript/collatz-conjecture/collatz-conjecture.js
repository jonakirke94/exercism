const error = () => {
  throw Error('Only positive numbers are allowed');
};

export const steps = (n) => {
  if (n <= 0) return error();
  let res = 0;
  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : (n * 3) + 1;
    res++;
  }

  return res;
};
