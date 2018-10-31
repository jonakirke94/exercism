const isValid = (RNA) => {
  const re = new RegExp('^[AUGC]*$');
  return re.test(RNA);
};

const codonMap = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCG: 'Serine',
  UCA: 'Serine',
  UCC: 'Serine',
  UCU: 'Serine',
  UAC: 'Tyrosine',
  UAU: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
};

export const translate = (RNA) => {
  if (!RNA) return [];

  if (!isValid(RNA)) throw new Error('Invalid codon');

  const protein = [];
  for (let i = 0; i < RNA.length; i += 3) {
    const codon = RNA.substring(i, i + 3);

    if (codonMap[codon] === 'STOP') {
      break;
    }

    protein.push(codonMap[codon]);
  }
  return protein;
};
