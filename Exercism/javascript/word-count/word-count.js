export class Words {

	count(words) {
		const res = {};
		const normalized = words.replace(/\n|\t|\s+/g, ' ');
		normalized
			.toLowerCase()
			.trim()
			.split(' ')
		  .forEach((word, _index, arr) => res[word] = (arr.filter(x => x === word)).length);

		return res;
	}

}

