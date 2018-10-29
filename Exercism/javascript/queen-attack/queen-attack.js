const isIdentical = pos => pos.white[0] === pos.black[0] && pos.white[1] === pos.black[1];

const isDiagonal = (white, black) => Math.abs(white[0] - black[0]) === Math.abs(white[1] - black[1]);

const isAligned = (white, black) => white[0] === black[0] || white[1] === black[1];

export class Queens {
  constructor(pos = { white: [0, 3], black: [7, 3] }) {
    if (isIdentical(pos)) throw new Error('Queens cannot share the same space');
    this.white = pos.white;
    this.black = pos.black;
  }

  canAttack() {
    return isDiagonal(this.white, this.black) || isAligned(this.white, this.black);
  }

  toString() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      let row = '';
      for (let j = 0; j < 8; j++) {
        if (i === this.white[0] && j === this.white[1]) {
          row += j === 7 ? 'W' : 'W ';
        } else if (i === this.black[0] && j === this.black[1]) {
          row += j === 7 ? 'B' : 'B ';
        } else {
          row += j === 7 ? '_' : '_ ';
        }
      }
      if (i === 7) {
        row += '\n';
      }
      board.push(row);
    }
    return board.join('\n');
  }
}
