export class Series {
  constructor(digits) {
    this.digits = [...digits].map(x => Number(x));
  }

  slices(val) {
    const series = [];
    const len = this.digits.length;

    if (val > len) {
      throw new Error('Slice size is too big.');
    }

    for (let i = 0; i < len; i += 1) {
      if (i + val <= len) {
        const slice = [];
        for (let j = 0; j < val; j += 1) {
          slice.push(this.digits[i + j]);
        }
        series.push(slice);
      }
    }

    return series;
  }
}
