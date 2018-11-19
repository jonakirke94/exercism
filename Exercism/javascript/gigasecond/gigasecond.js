export const gigasecond = (date) => {
  const toDate = new Date(date);
  const trillion = (10 ** 12);
  return new Date(toDate.getTime() + trillion);
};
