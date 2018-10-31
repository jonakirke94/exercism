const isValid = (RNA) => {
  const re = new RegExp('^[AUGC]*$');
  return re.test(RNA);
};

const codonMap = {
  Methionine: ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
  STOP: ['UAA', 'UAG', 'UGA'],
};

const codonByRNA = (RNA) => {
  const keys = Object.keys(codonMap);
  const filtered = keys.filter((key, i) => {
    if (codonMap[keys[i]].includes(RNA)) {
      return keys[i];
    }
  });
  return filtered[0];
};

export const translate = (RNA) => {
  if (!RNA) return [];

  if (!isValid(RNA)) throw new Error('Invalid codon');

  const protein = [];
  for (let i = 0; i < RNA.length; i += 3) {
    const rnaSub = RNA.substring(i, i + 3);
    const codon = codonByRNA(rnaSub);

    if (codon === 'STOP') {
      break;
    }

    protein.push(codon);
  }
  return protein;
};
