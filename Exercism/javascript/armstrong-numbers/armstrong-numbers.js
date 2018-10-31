const reducer = (acc, cur, _idx, arr) => acc += Math.pow(cur, arr.length);

export const validate = (n) => {
  const arr = [...n.toString()];
  const armstrong = arr.reduce(reducer, 0);
  return n === armstrong;
};
