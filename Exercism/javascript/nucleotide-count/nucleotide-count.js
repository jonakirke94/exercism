const error = () => {
  throw new Error('Invalid nucleotide in strand');
};

const isValid = (str) => {
  const re = new RegExp('^[GCTA]*$');
  return re.test(str);
};

export class NucleotideCounts {
  static parse(strand) {
    if (!isValid(strand)) return error();

    let adenine = 0;
    let cytosine = 0;
    let guanine = 0;
    let thymine = 0;

    // 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.
    [...strand].forEach((element) => {
		switch (element) {
		case 'A': adenine++;
			break;
		case 'C': cytosine++;
			break;
		case 'G': guanine++;
			break;
		case 'T': thymine++;
			break;
		}
    });

    return `${adenine} ${cytosine} ${guanine} ${thymine}`;
  }
}
