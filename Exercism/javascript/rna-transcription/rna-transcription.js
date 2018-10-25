const dnaToRna = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U',
};

const error = () => {
  throw new Error('Invalid input DNA.');
};

export const toRna = (dna) => {
  const re = new RegExp('^[GCTA]*$');
  const match = re.test(dna);
  if (match) {
    return dna.replace(/G|C|T|A/gi, x => dnaToRna[x]);
  }
  return error();
};
