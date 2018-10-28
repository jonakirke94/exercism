const error = () => {
  throw new Error('Invalid nucleotide in strand');
};

const isValid = (str) => {
  const re = new RegExp('^[GCTA]*$');
  return re.test(str);
};

const histogram = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
};

const reset = () => {
  histogram.A = 0;
  histogram.C = 0;
  histogram.G = 0;
  histogram.T = 0;
};

export class NucleotideCounts {
  static parse(strand) {
    if (!isValid(strand)) return error();

    // since it's a static method we need to make sure the histogram is reset on each call
    reset();

    [...strand].forEach((c) => {
      histogram[c] += 1;
    });
    return `${histogram.A} ${histogram.C} ${histogram.G} ${histogram.T}`;
  }
}
