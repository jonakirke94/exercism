class Matrix {
	constructor(input) {
		this.rows = [];
		this.columns = [];

		this.buildRows(input);
		this.buildColumns();
	}

	buildRows(input) {
		const rowArrays = input.split('\n');
		rowArrays.forEach(row => this.buildSingleRow(row));
	}

	buildColumns() {
		this.rows.forEach((_row, index) => this.buildSingleCol(index));
	}

	buildSingleRow(row) {
		const rowArr = [];
		row.split(' ').forEach(num => rowArr.push(Number(num)));
		this.rows.push(rowArr);
	}

	buildSingleCol(index) {
		const colArr = [];

		this.rows.forEach((row) => {
			if (row[index]) {
				colArr.push(row[index]);
			}
		});
		this.columns.push(colArr);
	}
}

export default Matrix;
