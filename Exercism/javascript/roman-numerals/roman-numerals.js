export const toRoman = n => {
	let roman = '';

	const keys = Object.keys(romans);
	while (n > 0) {
			for (let index = 0; index < keys.length; index++) {
				if (keys[index] > n) {
					roman += romans[keys[index - 1]];
					n = n - keys[index - 1];
					break;
				}
				else if (index === keys.length - 1) {
					roman += romans[keys[index]];
					n = n - keys[index];
					break;
				}				
			}
	}

	return roman;
}

const romans = {
	1:'I',
	4:'IV',
	5:'V',
	9:'IX',
	10:'X',
	40:'XL',
	50:'L',
	90:'XC',
	100:'C',
	400:'CD',
	500:'D',
	900:'CM',
	1000:'M'
}