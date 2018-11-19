export const gigasecond = (date) => {
  const toDate = new Date(date);
  const trillion = (10 ** 9) * 1000;
  return new Date(toDate.getTime() + trillion);
};
