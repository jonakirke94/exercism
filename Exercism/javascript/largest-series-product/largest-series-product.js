const multiply = numbers => numbers.reduce((acc, cur) => Number(acc) * Number(cur), 1);

export const largestProduct = (numbers, sequence) => {
  if (numbers.match('[^0-9]') || sequence < 0) {
    throw new Error('Invalid input.');
  }

  if (sequence > numbers.length) {
    throw new Error('Slice size is too big.');
  }

  const series = [];
  for (let i = 0; i <= numbers.length - sequence; i += 1) {
    series.push(numbers.substring(i, i + sequence));
  }

  const max = series.map(s => multiply([...s]));
  return Math.max(...max);
};
